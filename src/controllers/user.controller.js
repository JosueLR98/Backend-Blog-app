const userModel = require('./../models/user.model.js');
exports.findAllUsers = async (req, res) => {
  const users = await userModel.findAll({
    where: {
      status: 'active',
    },
  });
  return res.status(200).json({
    requestTime: time,
    result: users.length,
    status: 'success..!',
    message: 'Find list of users in the database',
    users,
  });
};
exports.findOneuser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findOne({
      where: {
        id: id,
        status: 'active',
      },
    });
    if (user === null) {
      return res.status(404).json({
        status: 'error',
        message: `The user with id: ${id} not found !`,
      });
    }
    return res.status(200).json({
      status: 'success',
      message: 'User found !',
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Internal Server Error..!',
    });
  }
};
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const user = await userModel.findOne({
      where: {
        id: id,
        status: 'active',
      },
    });
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: `User with id: ${id} not found`,
      });
    }
    await user.update({ name });
    return res.status(200).json({
      status: 'seccess',
      message: `User name and email has been updated`,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Internal Server Error..!',
    });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findOne({
      where: {
        id: id,
        status: 'active',
      },
    });
    if (!user) {
      res.status(200).json({
        status: 'error',
        message: `Product with id: ${id} not found!`,
      });
    }
    return res.status(200).json({
      status: 'successs',
      message: 'The user has been successfully removed!',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
    });
  }
};
