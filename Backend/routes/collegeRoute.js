const express=require("express")
const router=express.Router();
const {}=require('../controllers/college')
/*
    @Route  POST /add
    @Desc   For Users to register
    @Access Public
*/
router.post('/add', addUser)
router.post('/login', userLogin)
router.post('/logout', logout)
router.get('/loggedinuser', requireAuth, getLoggedInUser)
module.exports=router