const mongoose  = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ["pending", "in-progress", "completed"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

taskSchema.statics.getAllTasks = async function () {
  return this.find();
};

// Add an instance method to mark a task as completed
taskSchema.methods.markAsCompleted = async function () {
  this.status = "completed";
  return this.save();
};

module.exports = mongoose.model("Task", taskSchema);
