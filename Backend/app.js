const express= require('express')
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

//Using Routes
//const authRoutes=require("./routes/auth-route")
//const forumRoute=require("./routes/forums")
const userRoutes=require("./routes/user")
app.use("/api/user", userRoutes)
app.listen(3000, ()=>{
    console.log("Server Has Started")
})