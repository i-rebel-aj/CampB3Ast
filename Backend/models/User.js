const mongoose=require("mongoose")
const studentSchema=require("./Schemas/Student")
const facultySchema=require("./Schemas/Faculty")
const options={discriminatorKey: 'Type'}
const userSchema=new mongoose.Schema(
    {
        //Common Entries Goes Here
        username:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        gender:{
            type: String,
            required: true
        },
        collegeId:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        department:{
            type: String,
            required: true
        },
        enrolledDate:{
            type: Date,
            required: true
        },
        createdPrivateForums:[{
            /*
            _id: Schema.Types.ObjectId,
            ref: 'Forums'
            */
        }],
        joinedPrivateForums:[{
            /*
            _id: Schema.Types.ObjectId,
            ref: 'Forums'
            */
        }],
    },options,{timestamps: true}
)
const User=mongoose.model('User', userSchema)
const Student=User.discriminator('Student', studentSchema)
const Faculty=User.discriminator('Faculty', facultySchema)

module.exports={User, Student, Faculty}
/*
For Testing
const {testStudent, testFaculty}=require("../unitTests/variables")
const test=new Faculty(testFaculty)
//const test=new Student(testStudent)
console.log(test)
test.save((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Saved Successfully")
    }
})
*/