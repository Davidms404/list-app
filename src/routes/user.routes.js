const {
  signup,
  signin
} = require('../../controllers/user.controller.js');

const express = require('express');
const userRouter = express.Router();

//asignación de controller a cada método

userRouter.post('/auth/signup', signup);
userRouter.post('/auth/signin', signin);

module.exports = userRouter;