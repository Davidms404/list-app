const Task = require("../src/models/Task.js");

module.exports.createNewTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(400).json({ "error": error.message });
  }
}

module.exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ "error": error.message });
  }
}

module.exports.editTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await Task.updateOne({ _id: id }, req.body);

    if (!updatedTask) {
      return res.status(404).json({"error": "Task not found"});
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({"error": error.message});
  }
} 

module.exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({"error": "Task not found"});
    }

    res.json({"message": "Task deleted successfully"});
  } catch (error) {   
    res.status(500).json({"error": error.message});
  }
}