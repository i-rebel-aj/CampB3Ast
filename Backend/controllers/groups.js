const { getUserId } = require("../lib/helper")
const Group=require("../models/Groups")
const { User } = require("../models/User")
//Admin Only Access

/*=======================
    To Create a new group
=========================*/
exports.createGroup=async (req, res)=>{
    //Let all data be passed into req.decoded
    try{
        req._id=getUserId(req, res)
        const foundUser=await User.findById(req._id)
        //Middleware already checks that foundUser is Admin
        const groupInfo={
            groupName: req.body.groupName,
            groupDescription: req.body.groupDescription,
            associatedInstituteID: foundUser.instituteID
        }
        const newGroup= new Group(groupInfo)
        await newGroup.save()
        return res.status(200).json({message: 'Group added successfully'})
    }catch(err){
        console.log(err)
        return res.status(500).json({message: 'Server Error', err: err.message})
    }
}
/*=======================
    To get a group by ID
=========================*/
exports.getGroupById= async (req, res)=>{
    try{
        const foundGroup=await Group.findById(req.params.id)
        return res.status(200).json({message: 'Sucess', group: foundGroup})
    }catch(err){
        return res.status(500).json({message: 'Server Error', err: err.message})
    }
}
/*======================================
    To get groups of Admin's Institute
========================================*/
exports.getAllGroupsOfAnInstitute=async(req, res)=>{
    try{
        req._id=getUserId(req, res)
        const foundUser=await User.findById(req._id)
        //Must be admin only
        const foundGroups= await Group.find({associatedInstituteID: foundUser.instituteID})
        return res.status(200).json({message: 'Success', groups: foundGroups})
    }catch(err){
        return res.status(500).json({message: 'Server Error', err: err.message})
    }
}
/*=====================================
    To assign array of users a group
=======================================*/
exports.addGroupToUser=async (req, res)=>{
    const {username, groupName}=req.body
    try{
        const foundUser=await User.findOne({username: username})
        const foundGroup=await Group.findOne({groupName: groupName})
        //Sanity Check
        if(!foundGroup){
            throw new Error('User Not Found')
        }
        if(!foundGroup){
            throw new Error('Group Not Found')
        }
        if(foundUser.Type!=='Student'){
            throw new Error('Group can be added to students only')
        }
        //Replace following segment with mongoose operation
        for (const goupId of foundUser.groupsEnrolled) {
            if(groupId===foundGroup._id){
                throw new Error('Group Already Exists')
            }
        }
        foundUser.groupsEnrolled.push(foundGroup._id)
        await foundUser.save()
        return res.status(200).json({message: 'Group added Successfully'})
    }catch(err){
        console.log(err)
        return res.status(500).json({message: 'Server Error', err: err.message})
    }
}
/*====================================
    To Remove a student from group
======================================*/
exports.removeGroupFromUser=async (req, res)=>{
    const groupId=req.body.groupId
    const userId=req.body.userId
    User.findOne({_id: userId, collegeGroup: groupId})
    .then((student)=>{
        for(const i=0;i<student.collegeGroup.length;i++){
            if(student.collegeGroup[i]===groupId){
                student.collegeGroup.splice(i, 1);
            }
        }
        return res.status(200).json({message: "Success, Group removed successfully"})
    })
    .catch(err=>{
        //For better error handling
        console.log(err)
        return res.status(400).json({message: "Something went wrong"})
    })
}
/*==============================
    To Get users from a group
===============================*/
exports.getUsersByGroup=async (req, res)=>{
    //Pass College Name and Group Name
    const groupId=req.body.groupId
    const collegeID=req.body.collegeId
    const foundGroup= await Group.findById(groupId)
    if(!foundGroup){
        return res.status(401).json({message: "No such group exists"})
    }
    User.find({groupId: groupId, collegeId: collegeID})
    .then((user)=>{
        return res.status(200).json(user)
    })
    .catch((err)=>{
        //For better error handling
        console.log(err)
        return res.status(400).json({message: "Something went wrong"})
    })
}