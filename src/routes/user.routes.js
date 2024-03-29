const {
  signup,
  signin
} = require('../../controllers/user.controller.js');

const { verifyToken } = require('../middlewares/auth.jwt.js');

const express = require('express');
const userRouter = express.Router();

//asignación de controller a cada método

userRouter.post('/auth/signup', signup);
userRouter.post('/auth/signin', verifyToken, signin);

module.exports = userRouter;