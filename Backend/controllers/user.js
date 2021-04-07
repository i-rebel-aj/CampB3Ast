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