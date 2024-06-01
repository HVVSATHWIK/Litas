module.exports = {
    database: {
      host: 'localhost',
      port: 27017,
      dbName: 'social_media_db'
    },
    jwtSecret: 'your_jwt_secret_here',
    serverPort: 3000
  };
  
  // config/config.js
module.exports = {
    serverPort: process.env.PORT || 5000,
    mongoURI: 'mongodb://localhost:27017/social_media_app',
  };
  