//This is for the access of super admin ONLY
const Institute=require('../models/Institute')
const {User}=require('../models/User')
exports.addInstitute= async(req, res)=>{
    try{
        const newInstitute=new Institute(req.body)
        await newInstitute.save()
        return res.status(200).json({message: 'Institute added successfully'})
    }catch(err){
        console.log(err)
        if (err.code === 11000) {
            return res.status(500).json({message: 'Institute Already Exisits'})
        }
        return res.status(500).json({message: 'Server Error'})
    }
}
exports.assignAdmin=async(req, res)=>{
    try{
        const {instituteName, email}= req.body
        const foundInstitute=await Institute.findOne({instituteName: instituteName})
        const foundUser= await User.findOne({email: email})
        //Make sure that admin already doesnt exist
        if(foundInstitute.assignedAdmin){
            throw new Error('Admin already exists')
        }
        if(foundUser.Type!=='Admin'){
            throw new Error('This user can\'t be made into admin')
        }
        foundInstitute.assignedAdmin= foundUser._id
        await foundInstitute.save()
        return res.status(200).json({message: 'Assigned Admin success'})
    }catch(err){
        return res.status(500).json({message: 'Server Error', error: err})
    }
}

