const express =require("express") ;
const  fs =require("fs") ;
const mongoose =require("mongoose");

const todosRouter = require('./routes/todos');
const userRouter = require('./routes/users');
const app =express();
app.use(express.json());

app.use("/todos",todosRouter);
app.use("/users",userRouter);

mongoose.connect('mongodb://127.0.0.1:27017/nodeDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));
  
  
  app.listen(3000);