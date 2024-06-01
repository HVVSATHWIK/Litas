const { body, validationResult } = require('express-validator');

exports.validateRegistration = [
  body('username').notEmpty().isString(),
  body('password').notEmpty().isString(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
