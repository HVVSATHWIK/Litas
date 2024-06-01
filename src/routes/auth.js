const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validateRegistration } = require('../middleWare/validationMiddleware');

router.post('/register', validateRegistration, userController.registerUser);

router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;
