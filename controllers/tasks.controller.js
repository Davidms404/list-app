const Task = require('../src/models/Task.js');
const User = require('../src/models/User.js');

module.exports.createNewTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    console.log(req.body);
    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports.getTasks = async (req, res) => {
  try {
    const {userId } = req.params;
    const tasks = await Task.find({ user: userId });

    if (!tasks) {
      return res.status(404).json({ error: "No task found" });
    }

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports.editTask = async (req, res) => {
  try {
    const { userId, id } = req.params;
    const updatedTask = await Task.findOneAndUpdate({ _id: id, user: userId }, req.body);

    if (!updatedTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
} 

module.exports.deleteTask = async (req, res) => {
  console.log('entró');
  try {
    const { userId, id } = req.params;
    console.log('userid: ', userId);
    console.log('taskid: ', id);
    const deletedTask = await Task.findOneAndDelete({ _id: id, user: userId });

    if (!deletedTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (error) {   
    res.status(500).json({ error: error.message });
  }
}