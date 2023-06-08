const authController = require('./../controllers/auth.controller');
const express = require('express');
const validationMiddleware = require('./../middleware/validations.middleware');
const router = express.Router();

router.post(
  '/signup',
  validationMiddleware.createUserValidation,
  authController.signup
);

router.post(
  '/login',
  validationMiddleware.loginUserValidation,
  authController.login
);

module.exports = router;
