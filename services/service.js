const express = require('express');
const fetch = require('isomorphic-unfetch');
const client = require('prom-client');
const cors = require('cors');
require('dotenv').config();
const fs = require('fs');


const app = express();
const port = process.env.PORT || 4000;



// parse docker secrets 
const githubTokenPath = process.env.GITHUB_TOKEN_FILE || '/run/secrets/github_token';
const GITHUB_TOKEN = fs.readFileSync(githubTokenPath, 'utf8').trim();

app.use(cors());
// Create a Registry which registers the metrics
const register = new client.Registry();

// Add a default label which is added to all metrics
register.setDefaultLabels({
  app: 'backend-service'
});

// Enable the collection of default metrics
client.collectDefaultMetrics({ register });

// Create custom metrics
const httpRequestDurationMicroseconds = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.1, 0.2, 0.5, 1, 2, 5] // Custom bucket sizes
});

const httpRequestTotal = new client.Counter({
  name: 'http_request_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status_code']
});

// Register the custom metrics
register.registerMetric(httpRequestDurationMicroseconds);
register.registerMetric(httpRequestTotal);

// Middleware to handle Prometheus metrics
app.use((req, res, next) => {
  const end = httpRequestDurationMicroseconds.startTimer();

  res.on('finish', () => {
    httpRequestTotal.inc({
      method: req.method,
      route: req.path,
      status_code: res.statusCode
    });

    end({
      method: req.method,
      route: req.path,
      status_code: res.statusCode
    });
  });

  next();
});

// Enable CORS for all routes
app.use(cors());

// Define the API route
app.get('/api/repos', async (req, res) => {
  try {
    const response = await fetch('https://api.github.com/users/luqmanhaqim/repos', {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Expose the metrics endpoint
app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.listen(port, () => {
  console.log(`Backend service listening at http://localhost:${port}`);
});
