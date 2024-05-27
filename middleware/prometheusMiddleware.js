const { httpRequestDurationMicroseconds, httpRequestTotal } = require('../lib/prometheus');

const prometheusMiddleware = (req, res, next) => {
  const end = httpRequestDurationMicroseconds.startTimer();

  res.on('finish', () => {
    httpRequestTotal.inc({
      method: req.method,
      route: req.url,
      status_code: res.statusCode
    });

    end({
      method: req.method,
      route: req.url,
      status_code: res.statusCode
    });
  });

  next();
};

module.exports = prometheusMiddleware;
