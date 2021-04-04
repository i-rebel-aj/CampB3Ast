const { getUserId } = require("../lib/helper")
const Group=require("../models/Groups")
const { User } = require("../models/User")
//Admin Only Access
exports.createGroup=async (req, res)=>{
    //Let all data be passed into req.decoded
    try{
        console.log(`req._id before calling ${req._id}`)
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
        return res.status(200).json({message: 'Group added successfully', })
    }catch(err){
        console.log(err)
        return res.status(500).json({message: 'Server Error'})
    }
}
exports.getGroupById= async (req, res)=>{
    try{
        const foundGroup=await Group.findById(req.params.id)
        return res.status(200).json({message: 'Sucess', group: foundGroup})
    }catch(err){
        return res.status(500).json({message: 'Server Error'})
    }
}