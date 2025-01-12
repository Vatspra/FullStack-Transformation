const express = require("express");
const app = express();
const tasks = require("./src/routes/tasks");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/taskManager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const PORT = 3000;

app.use(express.json());

app.use("/tasks", tasks);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
