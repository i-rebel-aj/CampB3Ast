const jwt= require('jsonwebtoken')

exports.requireAuth= (req, res, next)=>{
    const token=req.cookies.jwt
    //check jwt exists or not
    if(token){
        jwt.verify(token, process.env.jwtSecret, (err, decoded)=>{
            if(err){
                res.status(404).json({message : "Something went wrong"})
            }else{
                console.log(decoded)
                next()
            }
        })
    }else{
        res.status(404).json({message : "token not found"})
    }
}
// const isAdmin = (req, res, next)=>{

// }