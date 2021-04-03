const express=require("express")
const router=express.Router();
const {addCollege, assignAdmin}=require('../controllers/college')
/*
    @Route  POST /api/college/add
    @Desc   For Super Admin to add Colleges
    @Access Public
*/
router.post('/add', addCollege)
/*
    @Route  POST /api/college/assignadmin
    @Desc   For Super Admin to assign a college Admin
    @Access Public
*/
router.post('/assignadmin', assignAdmin)
module.exports=router