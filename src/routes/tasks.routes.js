const  { 
  createNewTask, 
  getTasks, 
  editTask,
  deleteTask
} = require('../../controllers/tasks.controller.js');

const { verifyToken } = require('../middlewares/auth.jwt.js');

const express = require('express');
const taskRouter = express.Router();

//asignación de controladores y verificación a cada método de petición

taskRouter.post('/tasks/add',verifyToken, createNewTask);
taskRouter.get('/tasks/:userId', verifyToken, getTasks);
taskRouter.put('/tasks/:userId/edit/:id', verifyToken, editTask);
taskRouter.delete('/tasks/:userId/delete/:id', verifyToken, deleteTask);

module.exports = taskRouter;