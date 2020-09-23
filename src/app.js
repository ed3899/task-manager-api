//%Modules
const express = require("express");
const app = express();
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/tasks");

//% Middleware -->Watch video about middleware
app.use(express.json());
//Router
app.use(userRouter.router);
app.use(taskRouter.router);

module.exports = app;
