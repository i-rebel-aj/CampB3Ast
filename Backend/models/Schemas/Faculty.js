const mongoose=require("mongoose")
const facultySchema= new mongoose.Schema(
    {
        registrationNumber:{
            type: String,
            required: true
        },
        createdClasses:[{}]
    }
)
module.exports=facultySchema