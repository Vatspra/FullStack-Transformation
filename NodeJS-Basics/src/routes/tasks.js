const express = require("express");
const validateTask = require("../validators/taskValidator");
const validationHandler = require("../middleware/validationHandler");
const taskController = require("../controllers/taskController");
const router = express.Router();

router.get("/", taskController.getTasks);

router.post("/", validateTask, validationHandler, taskController.saveTask);

router.put("/:id", taskController.updateTask);

router.patch("/markDone/:id", taskController.completeTask);

router.delete("/:id", taskController.updateTask);

module.exports = router;
