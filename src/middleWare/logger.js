const winston = require('winston');

// Create a Winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logfile.log' })
  ],
});

module.exports = logger;
// logger.js

const express = require('express');
const morgan = require('morgan');

const app = express();

// Set up morgan middleware for HTTP request logging
app.use(morgan('combined'));

// Other middleware and routes...

module.exports = app;
