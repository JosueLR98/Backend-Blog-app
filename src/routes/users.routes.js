const userController = require('../controllers/user.controller');
const express = require('express');

const router = express.Router();

router.route('/').get(userController.findAllUsers);

router
  .route('/:id')
  .get(userController.findOneuser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
