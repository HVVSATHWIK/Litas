const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const express = require('express');
const router = express.Router();

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Social Media Platform API',
    version: '1.0.0',
    description: 'API documentation for the Social Media Platform application',
  },
  servers: [
    {
      url: 'http://localhost:3000', // Update with your server URL
      description: 'Development server',
    },
  ],
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'], // Path to the API routes folder
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// Serve swagger docs using swagger-ui-express
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerSpec));

module.exports = router;
