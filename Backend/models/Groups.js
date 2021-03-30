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
        collegeID:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'College'
        }
    }, {timestamps: true}
)
const Group=mongoose.model('Group', groupSchema)
module.exports=Group