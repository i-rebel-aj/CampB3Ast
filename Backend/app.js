const express= require('express')
const app=express()

//Mongoose
mongoose.connect('mongodb://localhost/CampB3ast', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(()=>{
    console.log("Connected to mongoDB")
})
.catch(err=>{console.log(err)})
const authRoutes=require("./routes/auth-route")
const forumRoute=require("./routes/forums")
app.listen(3000, ()=>{
    console.log("Server Has Started")
})