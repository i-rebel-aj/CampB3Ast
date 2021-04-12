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
module.exports=router