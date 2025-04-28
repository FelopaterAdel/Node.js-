const userModel = require("../models/users");





exports.getAll = async (req, res, next) => {
  try {
      let users = await userModel.find()
      res.status(200).json({
          status: "success",
          data: users,
      });
  } catch (err) {
      res.status(500).json({
          status: "error",
          message: err.message,
      });
  }
};

exports.saveUser = async (req, res) => {
  const user = req.body;
  try {
    const newUser = await userModel.create(user);

    res.status(201).json({
      status: "success",
      data: newUser,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.getById = async (req, res, next) => {
  const { id } = req.params;
  try {
      let user = await userModel.findOne({ _id: id });

      if (user) {
          res.status(200).json({
              status: "success",
              data: user,
          });
      } else {
          res.status(404).json({
              status: "failed",
              message: "user not found",
          });
      }
  } catch (err) {
      res.status(500).json({
          status: "error",
          message: err.message,
      });
  }

};
exports.deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
      let user = await userModel.findOneAndDelete({ _id: id });

      if (user) {
          res.status(200).json({
              status: "delete success",
              data: user,
          });
      } else {
          res.status(404).json({
              status: "failed",
              message: "user not found",
          });
      }
  } catch (err) {
      res.status(500).json({
          status: "error",
          message: err.message,
      });
  }

};
exports.updateUser = async (req, res, next) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
      let user = await userModel.findOneAndUpdate({ _id: id }, { $set: updateData }, { new: true });

      if (user) {
          res.status(200).json({
              status: "delete success",
              data: user,
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
