const express=require("express")
const router=express.Router();
const {getUserByUsername, addUser, addGroupToUser, removeGroupFromUser, getUsersByGroup, getUsersByCollege}=require("../controllers/user")
/*
    @Route  GET /api/user
    @Desc   To view a particular user by username
    @Access Public
*/
router.get("/", getUserByUsername)

/*
    @Route  POST /api/user
    @Desc   To add a particular User/ student or faculty
    @Access Public
*/
router.post("/", addUser)
/*
    @Route  GET /api/user/college/:name
    @Desc   To get students from a college
    @Access Public (Should be admin onlu)
*/
router.get("/college", getUsersByCollege)
module.exports=router