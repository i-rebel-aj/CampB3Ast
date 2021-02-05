const mongoose=require("mongoose")
const collegeScheme= new mongoose.Schema(
    {
        collegeName:{
            type: String,
            required: true
        },
        collegeDescription:{
            type: String
        },
        collegeId:{
            type: String,
            required: true
        }
    }, {timestamps: true}
)
const College=mongoose.model('College', collegeScheme)
module.exports=College