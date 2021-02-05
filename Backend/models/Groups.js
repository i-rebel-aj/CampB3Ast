const mongoose=require("mongoose")
const groupSchema= new mongoose.Schema(
    {
        groupName:{
            type: String,
            required: true
        },
        groupDescription:{
            type: String
        },
        groupId:{
            type: String,
            required: true
        },
        collegeID:{}
    }, {timestamps: true}
)
const Group=mongoose.model('Group', groupSchema)
module.exports=Group