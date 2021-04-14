const {Forum, privateForum, publicForum}=require('../models/Forums')
const {getUserId}=require('../lib/helper')
const { User } = require('../models/User')

//Exports Controller to create forum
exports.createForum=async(req, res)=>{
    req._id=getUserId(req, res)
    const {forumName, forumDescription, Type, memberLimit}=req.body 
    try{
        const foundUser= await User.findById(req._id)
        if(!foundUser){
            throw new Error('User Not Found')
        }   
        const newforum={
            forumName: forumName,
            forumDescription: forumDescription,
            createdBy: req._id,
            associatedInstituteID: foundUser.instituteID
        }
        if(Type==='Public'){
            const newPublicForum=new publicForum(newforum)
            await newPublicForum.save()
            return res.status(200).json({message: 'Forum added success', forumAdded: newPublicForum})
        }else if(Type==='Private'){
            if(memberLimit){
                newforum.memberLimit= memberLimit
            }
            const newPvtForum=new privateForum(newforum)
            //Creator is also a member
            newPvtForum.members.push(req._id)
            //Addmin Id to User
            foundUser.joinedPrivateForums.push(newPvtForum._id)
            await newPvtForum.save()
            await foundUser.save()
            return res.status(200).json({message: 'Forum added success', forumAdded: newPvtForum})
        }else{
            return res.status(500).json({message: 'Illegal Type'})
        }
    }catch(err){
        console.log(err)
        return res.status(500).json({message: 'Server Error', err: err.message})
    }
}
//Get Forum by forum name
exports.getForumByForumName=async(req, res)=>{
    try{
        const foundForum=await Forum.findOne({forumName: req.body.forumName})
        if(!foundForum){
            throw new Error('Forum Not found')
        }
        return res.status(200).json({message: 'Forum found', foundForum: foundForum})
    }catch(err){
        console.log(err)
        return res.status(500).json({message: 'Server Error', err: err.message})
    }
}
//Get Forums of a User (ADMIN)
exports.getAllForumOfAUser= async (req, res)=>{
    try{
        const foundUser= await User.findById(req.body.userId)
        //Get All Public Forums
        let foundPublicForums=await Forum.find({Type: 'Public'})
        //Get Joined Pvt Forums Of a User
        let userPrivateForum=[]
        for (const forumId of foundUser.joinedPrivateForums) {
            let foundpvtForum=await Forum.findById(forumId)
            userPrivateForum.push(foundpvtForum)
        }
        //Get Created Forums of a User
        let createdForums=await Forum.find({createdBy: foundUser._id})
        return res.status(200).json({message: 'Found Forums are', public: foundPublicForums, private: userPrivateForum, created: createdForums})
    }catch(err){
        console.log(err)
        return res.status(500).json({message: 'Server Error', err: err.message})
    }
}

//Get Forums of a logged in user
exports.getAllForumsofLoggedInUser= async(req, res)=>{
    try{
        req._id=getUserId(req, res)
        const foundUser= await User.findById(req._id)
        //Get All Public Forums
        let foundPublicForums=await Forum.find({Type: 'Public'})
        //Get Joined Pvt Forums Of a User
        let userPrivateForum=[]
        for (const forumId of foundUser.joinedPrivateForums) {
            let foundpvtForum=await Forum.findById(forumId)
            userPrivateForum.push(foundpvtForum)
        }
        //Get Created Forums of a User
        let createdForums=await Forum.find({createdBy: foundUser._id})
        return res.status(200).json({message: 'Found Forums are', public: foundPublicForums, private: userPrivateForum, created: createdForums})
    }catch(err){
        console.log(err)
        return res.status(500).json({message: 'Server Error', err: err.message})
    }
}
//Add Users to private Forum
exports.addUsersToPvtForum= async(req, res)=>{
    try{
        const {userIds, forumId}=req.body
        const foundForum=await Forum.findById(forumId)
        if(!foundForum){
            throw new Error('Forum not found')
        }
        if(foundForum.Type!=='Private'){
            throw new Error('Forum is not pvt')
        }
        for (const userId of userIds) {
            let foundUser= await User.findById(userId)
            if(foundUser.instituteID.equals(foundForum.associatedInstituteID)){
                if(foundForum.memberLimit>foundForum.members.length&& foundUser.joinedPrivateForums.indexOf(foundForum._id)===-1){
                    foundForum.members.push(foundUser._id)
                    foundUser.joinedPrivateForums.push(foundForum._id)
                    await foundUser.save()
                    //Save after each change
                    await foundForum.save()
                }
            }
        }
        return res.status(200).json({message: 'Users added to pvt forum'})
    }catch(err){
        console.log(err)
        return res.status(500).json({message: 'Server Error', err: err.message})
    }
}