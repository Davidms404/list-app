const  { 
  createNewTask, 
  getTasks, 
  editTask,
  deleteTask
} = require('../../controllers/tasks.controller.js');

const express = require('express');
const router = express.Router();

//asignación de controllers a cada método

router.post('/tasks/add', createNewTask);
router.get('/tasks', getTasks);
router.put('/tasks/:id/edit', editTask);
router.delete('/tasks/:id/delete', deleteTask);

module.exports = router;