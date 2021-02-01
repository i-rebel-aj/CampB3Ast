const mongoose=require("mongoose")
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
        collegeName:{
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
const test=new Student(testuser1)
console.log(test)