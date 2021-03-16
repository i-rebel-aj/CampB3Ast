const {User, Student, Faculty}=require("../models/User")
const Group=require("../models/Groups")
const bcrypt = require('bcrypt');

exports.getUserByUsername=async (req, res)=>{
     User.findOne({username: req.query.username}).then((doc)=>{
        return res.status(200).json(doc)
     }).catch((err)=>{
        return res.status(404).json({message: "Invalid ID"})
     })
}

exports.addGroupToUser=async (req, res)=>{
    const groupId=req.body.groupId
    const userId=req.body.userId
    const foundGroup=await Group.find({groupId: groupId})
    if(foundGroup.length<0){
        return res.status(404).json({message: "This group doesnt exist please create one"})
    }
    User.findOne({_id:userId})
    .then((student)=>{
        if(student.Type!=='Student'){
            return res.status(400).json({message: "Following user is not a student"})
        }
        if(student.collegeGroup.find((group)=>{group===groupId})){
            return res.status(200).json({message: "This student already exists in the specified group"})    
        }
        student.collegeGroup.push(groupId)
        student.save()
        return res.status(200).json({message: "Group Added Successfully"})
    })
    .catch((err)=>{return res.status(404).json({message: "Invalid UserID", err: err})})
}
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
exports.getUsersByCollege= async (req, res)=>{
    const collgId= req.query.collegeId
    const Type= req.query.Type
    User.find({collegeId: collgId, Type: Type})
    .then((user)=>{
        return res.status(200).json({message: `Returned ${Type}`, user})
    })
    .catch((err)=>{
        //For better error handling
        console.log(err)
        return res.status(400).json({message: "Something went wrong"})
    })
}