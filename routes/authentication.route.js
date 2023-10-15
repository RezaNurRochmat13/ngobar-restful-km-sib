const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/authentication.controller')

authRouter.post('/api/auth/register', authController.register);
authRouter.post('/api/auth/login', authController.login);

module.exports = authRouter
