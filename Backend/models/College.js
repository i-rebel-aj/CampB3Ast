const mongoose=require("mongoose")
const collegeScheme= new mongoose.Schema(
    {
        collegeName:{
            type: String,
            required: true,
            unique: true
        },
        collegeDescription:{
            type: String,
            required: true
        },
        assignedAdmin:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        contactDetails:{
            //To be Added Later
        }
    }, {timestamps: true}
)
const College=mongoose.model('College', collegeScheme)
module.exports=College