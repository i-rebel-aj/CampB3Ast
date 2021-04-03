const mongoose=require("mongoose")
const facultySchema= new mongoose.Schema(
    {
        department:{
            type: String,
            required: true
        },
        enrolledDate:{
            type: Date,
            required: true
        },
        registrationNumber:{
            type: String,
            required: true
        },
        createdClasses:[{}]
    }
)
module.exports=facultySchema