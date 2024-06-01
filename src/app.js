const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const connectDB = require('./config/db');
const swaggerDocs = require('./swagger');
const authRoutes = require('./routes/auth');
const postManagementRoutes = require('./routes/postManagement');
const { authenticateUser } = require('./middleware/authMiddleware');
const errorHandler = require('./middleware/errorhandler');
const requestLogger = require('./middleware/requestLogger');
const config = require('./config/config');

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(requestLogger);
app.use(authenticateUser);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postManagementRoutes);

// Swagger documentation route
app.use('/docs', swaggerDocs);

// Error handling middleware
app.use(errorHandler);

app.listen(config.serverPort, () => {
  console.log(`Server is running on port ${config.serverPort}`);
});

module.exports = app;
  