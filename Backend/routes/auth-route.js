const express=require("express")
const router=express.Router();
const {addUser, userLogin, logout, getLoggedInUser}=require('../controllers/auth')
const {requireAuth}= require('../middleware/auth-middleware')
/*
    @Route  POST /auth
    @Desc   For Users to register
    @Access Public
*/
router.post('/signup', addUser)
router.post('/login', userLogin)
router.post('/logout', logout)
router.get('/loggedinuser', requireAuth, getLoggedInUser)
module.exports=router