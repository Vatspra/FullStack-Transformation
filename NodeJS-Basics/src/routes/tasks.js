const express = require("express");
const taskController = require("../controllers/taskController");
const router = express.Router();

router.get("/", async (req, res) => {
  taskController.getTasks(req, res);
});

router.post("/", async (req, res) => {
  taskController.saveTask(req, res);
});

router.put("/:id", (req, res) => {
  taskController.updateTask(req, res);
});

router.patch("/markDone/:id", (req, res) => {
  taskController.completeTask(req, res);
});

router.delete("/:id", (req, res) => {
  taskController.updateTask(req, res);
});

module.exports = router;
