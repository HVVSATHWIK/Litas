const authenticateUser = (req, res, next) => {
    // Authentication logic here
    if (req.isAuthenticated()) {
      return next(); // Move to the next middleware/route handler
    }
    res.status(401).send('Unauthorized'); // Send a 401 Unauthorized response
  };
  
  module.exports = {
    authenticateUser
  };
  