const {User, Student, Faculty}=require("../models/User")
const Group=require("../models/Groups")
const bcrypt = require('bcrypt');

exports.getUserById=async (req, res)=>{
     User.findById({_id: req.params.id}).then((doc)=>{
        return res.status(200).json(doc)
     }).catch((err)=>{
        return res.status(404).json({message: "Invalid ID"})
     })
}
exports.addUser= async (req, res)=>{
    const type=req.body.Type
    const newUser=req.body
    try{
        if(type==="Student"){
            const existingUser= await User.find({rollNumber: newUser.rollNumber, collegeId: newUser.collegeId, batch: newUser.batch, department: newUser.department})
            if(existingUser.length>0){
                return res.status(409).json({message: "Student with same rollNo exists in this department in this batch"})
            }
            const newStudent =new Student(newUser)
            const salt = bcrypt.genSaltSync(10);
            newStudent.password= bcrypt.hashSync(newUser.password, salt);
            await newStudent.save()
            return res.status(200).json({message: "Student added successfully"})
        }else if(type==="Faculty"){
            const existingUser= await User.find({registrationNumber: newUser.registrationNumber, collegeId: newUser.collegeId})
            if(existingUser.length>0){
                return res.status(409).json({message: "Faculty with same registeration number already exists in this college"})
            }
            const newFaculty =new Faculty(newUser)
            const salt = bcrypt.genSaltSync(10);
            newFaculty.password= bcrypt.hashSync(newUser.password, salt);
            await newFaculty.save()
            return res.status(200).json({message: "Faculty added successfully"})
        }else{
            return res.status(400).json({message: "Not the right type"})
        }
    }catch(err){
        console.log(err)
        //MongoDB throws an error of status code 11000 if repetions exist 
        if(err.code===11000){
            if(err.keyValue.username){
                return res.status(409).json({message: "User with this username already exists"})
            }
            if(err.keyValue.email){
                return res.status(409).json({message: "User with this email already exists"})
            }
        }
        res.status(500).json({message: "Something went wrong"})
    }

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
        if(student.collegeGroup.find((group)=>{group===groupId})){
            return res.status(200).json({message: "This student already exists in the specified group"})    
        }
        student.collegeGroup.push(groupId)
        student.save()
        return res.status(200).json({message: "Group Added Successfully"})
    })
    .catch((err)=>{return res.status(404).json({message: "Invalid UserID"})})
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
    const collgId= req.body.collegeId
    const Type= req.body.Type
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