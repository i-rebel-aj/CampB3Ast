const mongoose=require("mongoose")
const groupSchema= new mongoose.Schema(
    {
        groupName:{
            type: String,
            unique: true
        },
        groupDescription:{
            type: String,
            required: true
        },
        groupId:{
            type: String,
            required: true,
            unique: true
        },
        associatedCollegeName:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'College'
        }
    }, {timestamps: true}
)
const Group=mongoose.model('Group', groupSchema)
module.exports=Group