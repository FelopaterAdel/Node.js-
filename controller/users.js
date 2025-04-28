const userModel = require("../models/users");
exports.getAll = (req, res) => {
  res.json([]);
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
