const User = require('../models/user.model');
const AppError = require('./../utils/appError');

exports.validUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: {
        id,
        status: 'active',
      },
    });
    if (!user) {
      return next(new AppError(`Cant find ${req.originalUr} not found`, 404));
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong! 🧨',
    });
  }
};
