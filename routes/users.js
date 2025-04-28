const express = require("express");
const router = express.Router();

const {getAll,saveUser,updateUser,deleteUser,getById}=require('../controller/users')


router.get("/",getAll);
router.get("/:id",getById);

router.post('/',saveUser);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);


module.exports = router;
