const mongoose=require("mongoose")
const studentSchema= new mongoose.Schema(
    {
        rollNumber:{
            type: String,
            required: true
        },
        course:{
            type: String,
            required: true
        },
        courseDuration:{
            type: Number,
            required: true
        },
        classEnrolled:[{}],
        collegeGroup:[]
    }
)
module.exports=studentSchema