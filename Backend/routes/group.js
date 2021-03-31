const express=require("express")
const router=express.Router();
const {createGroup}=require('../controllers/groups')
/*
    @Route  POST /api/group/add
    @Desc   For College Admin to add Group
    @Access Public
*/
router.post('/add', addCollege)

// /*
//     @Route  POST /api/college/assignadmin
//     @Desc   For Super Admin to assign a college Admin
//     @Access Public
// */
// router.post('/assignadmin', assignAdmin)

module.exports=router