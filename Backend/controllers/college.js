//This is for the access of super admin ONLY
const College=require('../models/College')
const {User}=require('../models/User')
exports.addCollege= async(req, res)=>{
    try{
        const newCollege=new College(req.body)
        await newCollege.save()
        return res.status(200).json({message: 'College added successfully'})
    }catch(err){
        console.log(err)
        if (err.code === 11000) {
            return res.status(500).json({message: 'College Already Exisits'})
        }
        return res.status(500).json({message: 'Server Error'})
    }
}

exports.assignAdmin=async(req, res)=>{
    try{
        const {collegeName, email}= req.body
        const foundCollege=await College.findOne({collegeName: collegeName})
        const foundUser= await User.findOne({email: email})
        //Make sure that admin already doesnt exist
        if(foundCollege.assignedAdmin){
            throw new Error('Admin already exists')
        }
        if(foundUser.Type!=='Admin'){
            throw new Error('This user can\'t be made into admin')
        }
        foundCollege.assignedAdmin= foundUser._id
        await foundUser.save()
        return res.status(200).json({message: 'Assigned Admin success'})
    }catch(err){
        return res.status(500).json({message: 'Server Error', error: err})
    }
}