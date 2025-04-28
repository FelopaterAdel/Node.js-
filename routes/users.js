const express = require("express");
const router = express.Router();

const {getAll,saveUser}=require('../controller/users')


router.get("/",getAll);


router.post('/',saveUser);


module.exports = router;
