const express=require("express")
const router=express.Router();
const {getUserByUsername, addGroupToUser, removeGroupFromUser, getUsersByGroup, getUsersByInstitute}=require("../controllers/user")
const {requireAuth}=require('../middleware/auth-middleware')
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
/*
    @Route  GET /api/user/college/:name
    @Desc   To get students from a college
    @Access Public (Should be admin only)
*/
router.get("/college", getUsersByInstitute)
module.exports=router