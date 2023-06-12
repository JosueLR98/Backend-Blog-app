const express = require('express');
//Controladores
const authController = require('./../controllers/auth.controller');
//Middlewares
const validationMiddleware = require('../middlewares/validations.middleware');

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
