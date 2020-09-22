//%Modules
const express = require("express");
const app = express();
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/tasks");

//%Port
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Online");
});

//% Middleware -->Watch video about middleware
app.use(express.json());
//Router
app.use(userRouter.router);
app.use(taskRouter.router);

//%Listen
app.listen(port, () => {
  console.log("Server is up on port: ", port);
});
