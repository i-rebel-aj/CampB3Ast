const express=require("express")
const router=express.Router();
const {getUserById, addUser}=require("../controllers/user")
/*
    @Route  GET /api/user/:id
    @Desc   To view a particular user by ID
    @Access Public
*/
router.get("/:id", getUserById)

/*
    @Route  POST /api/user
    @Desc   To add a particular User/ student or faculty
    @Access Public
*/
router.post("/", addUser)
module.exports=router