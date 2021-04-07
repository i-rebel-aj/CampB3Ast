const express=require("express")
const router=express.Router();
const {createGroup, getGroupById, getAllGroupsOfAnInstitute}=require('../controllers/groups')
const {isAdmin, requireAuth}=require('../middleware/auth-middleware')
/*===========================
    POST Routes Goes Here
=============================*/
/*
    @Route  POST /api/group
    @Desc   For College Admin to add Group
    @Access Private
*/
router.post('/',[requireAuth, isAdmin], createGroup)

/*===========================
    GET Routes Goes Here
=============================*/
/*
    @Route  GET /api/group
    @Desc   For College Admin to view all Groups
    @Access Private
*/
router.get('/',[requireAuth, isAdmin], getAllGroupsOfAnInstitute)
/*
    @Route  POST /api/group
    @Desc   For College Admin to view group by id
    @Access Private
*/
router.get('/:id', getGroupById)
module.exports=router