const jwt = require("jsonwebtoken");
const { User, Student, Faculty, Admin } = require("../models/User");
const Group = require("../models/Groups");
const {getUserId}=require('../lib/helper')
const {issueJWT}= require('../lib/utils')
exports.addUser = async (req, res) => {
  const type = req.body.Type;
  const newUser = req.body;
  try {
    if (type === "Student") {
      const existingUser = await User.find({
        rollNumber: newUser.rollNumber,
        collegeId: newUser.collegeId,
        batch: newUser.batch,
        department: newUser.department,
      });
      if (existingUser.length > 0) {
        return res
          .status(409)
          .json({
            message:
              "Student with same rollNo exists in this department in this batch",
          });
      }
      const newStudent = new Student(newUser);
      await newStudent.save();
      //const token = createToken(newStudent._id);
      //res.cookie("jwt", token, { httpOnly: true, maxAge: maxjwtAge * 1000 });
      return res.status(200).json({ message: "Student added successfully"});
    } else if (type === "Faculty") {
      const existingUser = await User.find({
        registrationNumber: newUser.registrationNumber,
        collegeId: newUser.collegeId,
      });
      if (existingUser.length > 0) {
        return res
          .status(409)
          .json({
            message:
              "Faculty with same registeration number already exists in this college",
          });
      }
      const newFaculty = new Faculty(newUser);
      await newFaculty.save();
      //const token = createToken(newFaculty._id);
      //res.cookie("jwt", token, { httpOnly: true, maxAge: maxjwtAge * 1000 });
      return res
        .status(200)
        .json({ message: "Faculty added successfully" });
    } else {
      return res.status(400).json({ message: "Not the right type" });
    }
  } catch (err) {
    console.log(err);
    //MongoDB throws an error of status code 11000 if repetions exist
    if (err.code === 11000) {
      if (err.keyValue.username) {
        return res
          .status(409)
          .json({ message: "User with this username already exists" });
      }
      if (err.keyValue.email) {
        return res
          .status(409)
          .json({ message: "User with this email already exists" });
      }
    }
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.userLogin = async (req, res) => {
  try {
    const username = req.body.username;
    const pass = req.body.password;
    const user = await User.findOne({ username: username });
    if(!user){
        throw Error('User not found')
    }
    if (!user.authenticate(pass)) {
      return res.status(400).json({ message: "Invalid Username / Password" });
    } else {
      const tokenObject = issueJWT(user);
      //Check for CORS, as cookies are not set with react
      res.cookie("token", tokenObject.token, { expiresIn: tokenObject.expires });
      console.log("Logged in successfully");
      return res.status(200).json({ token:tokenObject.token, user:user});
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({ message: "User not found" });
  }
};

exports.logout = async(req,res)=>{
  res.clearCookie("token");
  res.json({
    msg: "User logout Successfully",
  });
};
exports.getLoggedInUser= async (req, res)=>{
  console.log('Get Loggen in User Route')
    try{
        req._id=getUserId(req, res)
        console.log(req._id)
        if(req._id===null){
          throw new Error('Token Not Found')
        }
        const user= await User.findById(req._id)
        if(!user){
          throw new Error('User not Found')
        }
        return res.status(200).json({message: 'User Found', user: user})
    }catch(err){
      //console.log(err)
      return res.status(500).json({message: 'Server Error'})
    }
}


//This is the controller to create College Admin, access to SUPER Admin Only
exports.createCollegeAdmin= async(req, res)=>{
  //Do validation later
  try{
    const newCollegeAdmin=new Admin(req.body)
    await newCollegeAdmin.save()
    return res.status(200).json({message: 'New admin created please assign him to the college'})
  }catch(err){
    res.status(500).json({message: 'Server Error'})
  }
  
}