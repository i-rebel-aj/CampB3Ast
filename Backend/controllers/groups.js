const Group=require("../models/Groups")
const jwt = require("jsonwebtoken");
exports.createGroup=async (req, res)=>{
    //Let all data be passed into req.decoded
    try{
        // if(!req.decoded){
        //     throw new Error('Invalid Decoded') 
        // }
        jwt.verify(req.cookies.jwt, process.env.jwtSecret, (err, decoded)=>{
            if(err){
                res.status(404).json({message : "Something went wrong"})
            }else{
                console.log('Decoded onject inside controller')
                console.log(decoded)
                id = decoded.id;
            }
        })
    }catch(err){
        return res.status(500).json({message: 'Server Error'})
    }
    
}