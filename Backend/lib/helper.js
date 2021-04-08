// Add any helper function here
const jwt = require("jsonwebtoken");
const config = require("../config/config");
exports.getUserId = (req, res) => {
    try {
        const token = req.header("x-auth-token");
        if (!token) {
           throw new Error('No token authorization denied')
        }
        const decoded = jwt.verify(token, config.SECRET_KEY);
        return decoded.sub;
    } catch (err) {
      console.log(err)
      return null
    }
};