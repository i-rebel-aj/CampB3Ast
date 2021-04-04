const mongoose=require("mongoose")
const groupSchema= new mongoose.Schema(
    {
        groupName:{
            type: String,
            unique: true,
            required: true
        },
        groupDescription:{
            type: String,
            required: true
        },
        associatedInstituteID:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Institute',
            required: true
        }
    }, {timestamps: true}
)
const Group=mongoose.model('Group', groupSchema)
module.exports=Group