const express= require('express')
const cors = require('cors')
const cookieParser=require('cookie-parser')

const app=express()

const mongoose=require("mongoose")
require('dotenv').config()
//Mongo DB Connection
mongoose.connect(process.env.DB_Production, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(()=>{
    console.log("Connected to mongoDB")
})
.catch(err=>{console.log(err)})
//Using Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors())
cors({credentials: true, origin: true})
//Using Routes
const authRoutes=require("./routes/auth-route")
//const forumRoute=require("./routes/forums")
const userRoutes=require("./routes/user")
const collegeRoutes=require('./routes/collegeRoute')
app.use("/api/user", userRoutes)
app.use('/api/user/auth', authRoutes)
app.use('/api/college', collegeRoutes)
app.listen(5000, ()=>{
    console.log("Server Has Started")
})