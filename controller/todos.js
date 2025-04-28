const fs = require("fs");
const todoModel = require("../models/todos");



const saveTodo = async (req, res, next) => {
    let newTodo = req.body;

    try {
        const todo = await todoModel.create(newTodo);

        res.status(201).json({
            status: "success",
            message: "saved successfully",
            data: todo,
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message,
        });
    }
};
const getAll = async (req, res, next) => {
    try {
        let todos = await todoModel.find().populate("userId", '-password -_id')
        res.status(200).json({
            status: "success",
            data: todos,
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
};

const getById = async (req, res, next) => {
    const { id } = req.params;
    try {
        let todo = await todoModel.findOne({ _id: id });

        if (todo) {
            res.status(200).json({
                status: "success",
                data: todo,
            });
        } else {
            res.status(404).json({
                status: "failed",
                message: "todo not found",
            });
        }
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.message,
        });
    }

};
const deleteTodo = async (req, res, next) => {
    const { id } = req.params;
    try {
        let todo = await todoModel.findOneAndDelete({ _id: id });

        if (todo) {
            res.status(200).json({
                status: "delete success",
                data: todo,
            });
        } else {
            res.status(404).json({
                status: "failed",
                message: "todo not found",
            });
        }
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.message,
        });
    }

};
const updateTodo = async (req, res, next) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        let todo = await todoModel.findOneAndUpdate({ _id: id }, { $set: updateData }, { new: true });

        if (todo) {
            res.status(200).json({
                status: "delete success",
                data: todo,
            });
        } else {
            res.status(404).json({
                status: "failed",
                message: "update success",
            });
        }
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.message,
        });
    }

};



module.exports = { saveTodo, getAll, getById, deleteTodo, updateTodo };
