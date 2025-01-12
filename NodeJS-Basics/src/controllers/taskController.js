const Task = require("../models/taskModel");

// Fetch all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks", error });
  }
};

// Mark a task as completed
const completeTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    await task.markAsCompleted();
    res.status(200).json({ message: "Task marked as completed", task });
  } catch (error) {
    res.status(500).json({ message: "Error updating task", error });
  }
};

const saveTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json({ messgae: "successfull submitted" });
  } catch (err) {
    res.status(500).json({ error: "something went wrong" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findOneAndDelete(id);
    res.status(204).send();
  } catch (err) {
    res.status(404).json({ error: "Task not found" });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const task =  await Task.findOneAndUpdate({_id: id}, update, {new: true});
    res.json({_id: task._id.toString(), title: task.title, description: task.description})
  } catch (err) {
    console.log(err)
    res.status(404).json({ error: "Task not found" });
  }
};

module.exports = { getTasks, completeTask, saveTask, deleteTask , updateTask};
