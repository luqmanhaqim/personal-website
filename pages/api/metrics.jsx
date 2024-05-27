// pages/api/metrics.js
const { register } = require('../../lib/prometheus');

export default async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.end(await register.metrics());
};
