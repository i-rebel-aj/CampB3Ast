const Group = require("../models/Groups")
const {User}=require("../models/User")

exports.getUserByUsername=async (req, res)=>{
     User.findOne({username: req.query.username}).then((doc)=>{
        return res.status(200).json(doc)
     }).catch((err)=>{
        return res.status(404).json({message: "Invalid ID"})
     })
}
//To add group to a single user
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
        return res.status(500).json({message: 'Server Error'})
    }
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
exports.getUsersByInstitute= async (req, res)=>{
    const instituteName= req.query.instituteName
    const Type= req.query.Type
    User.find({instituteName: instituteName, Type: Type})
    .then((user)=>{
        return res.status(200).json({message: `Returned ${Type}`, user})
    })
    .catch((err)=>{
        //For better error handling
        console.log(err)
        return res.status(400).json({message: "Something went wrong"})
    })
}