const {User, Student, Faculty}=require("../models/User")
const bcrypt = require('bcrypt');

exports.getUserById=async (req, res)=>{
     User.findById({_id: req.params.id}).then((doc)=>{
        return res.status(200).json(doc)
     }).catch((err)=>{
        return res.status(404).json({message: "Invalid ID"})
     })
}
exports.addUser= async (req, res)=>{
    //console.log(req.body)
    const type=req.body.Type
    //console.log(type)
    const newUser=req.body
    try{
        if(type==="Student"){
            const newStudent =new Student(newUser)
            const salt = bcrypt.genSaltSync(10);
            newStudent.password= bcrypt.hashSync(newUser.password, salt);
            await newStudent.save()
            return res.status(200).json({message: "Student added successfully"})
        }else if(type==="Faculty"){
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
                return res.status(400).json({message: "User with this username already exists"})
            }
            if(err.keyValue.email){
                return res.status(400).json({message: "User with this email already exists"})
            }
        }
        res.status(500).json({message: "Something went wrong"})
    }

}
/*
exports.getUserByGroup=async (req, res)=>{
    User.find()
}
*/