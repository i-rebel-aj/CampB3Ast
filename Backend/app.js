const express= require('express')
const cors = require('cors')
const cookieParser=require('cookie-parser')
const morgan = require('morgan');

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
app.use(morgan('dev'));
app.use(express.json())
app.use(cookieParser())
app.use(cors())
cors({credentials: true, origin: true})
//Using Routes
const authRoutes=require("./routes/auth-route")
//const forumRoute=require("./routes/forums")
const userRoutes=require("./routes/user")
const instituteRoutes=require('./routes/instituteRoute')
const superUserRoutes=require('./routes/superAdmin')
app.use("/api/user", userRoutes)
app.use('/api/user/auth', authRoutes)
app.use('/api/institute', instituteRoutes)
app.use('/api/superuser', superUserRoutes)
app.listen(process.env.PORT, ()=>{
    console.log(`Server has started at port ${process.env.PORT}`)
})