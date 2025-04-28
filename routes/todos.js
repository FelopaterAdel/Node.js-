const express = require("express");
const router = express.Router();
const fs = require("fs");


const { saveTodo, getAll, getById , deleteTodo , updateTodo } = require("../controller/todos");

router.post("/", saveTodo);

router.get("/", getAll);
router.get("/:id", getById);

router.delete("/:id", deleteTodo);
router.put("/:id", updateTodo);

module.exports = router;

