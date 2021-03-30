const jwt = require("jsonwebtoken");
const { User, Student, Faculty, Admin } = require("../models/User");
const Group = require("../models/Groups");
const bcrypt = require("bcrypt");
const {getLoggedInId}=require('../lib/helper')
//3 Days validity of jwt
const maxjwtAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.jwtSecret, {
    expiresIn: maxjwtAge,
  });
};
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
      const salt = bcrypt.genSaltSync(10);
      newStudent.password = bcrypt.hashSync(newUser.password, salt);
      await newStudent.save();
      const token = createToken(newStudent._id);
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxjwtAge * 1000 });
      return res
        .status(200)
        .json({ message: "Student added successfully", token: token });
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
      const salt = bcrypt.genSaltSync(10);
      newFaculty.password = bcrypt.hashSync(newUser.password, salt);
      await newFaculty.save();
      const token = createToken(newFaculty._id);
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxjwtAge * 1000 });
      return res
        .status(200)
        .json({ message: "Faculty added successfully", token: token });
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
      //console.log("Invalid Username/password");
      return res.status(400).json({ message: "Invalid Username / Password" });
    } else {
      const token = createToken(user._id);
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxjwtAge * 1000 });
      return res
        .status(200)
        .json({ message: "User logged in successfully", token: token });
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({ message: "User not found" });
  }
};

exports.logout = async(req,res)=>{
    res.clearCookie("jwt");
    res.json({
    msg: "User logout Successfully",
  });
};
exports.getLoggedInUser= async (req, res)=>{
    //const decoded=await getLoggedInId(req.cookies.jwt)
    //console.log(decoded)
    let id
    jwt.verify(req.cookies.jwt, process.env.jwtSecret, (err, decoded)=>{
        if(err){
            res.status(404).json({message : "Something went wrong"})
        }else{
            id = decoded.id;
        }
    })
    //console.log(id)
    const user= await User.findById(id)
    if(user){
        res.status(200).json({user: user})
    }else{
        res.status(400).json({message: 'User not found'})
    }
}


//This is the controller to create College Admin
exports.createCollegeAdmin= async(req, res)=>{
  const {name, email, pass, collegeId}=req.body

}