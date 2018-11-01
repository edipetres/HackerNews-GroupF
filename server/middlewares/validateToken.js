const jwt = require("jsonwebtoken");

// const logger = require( "../utilities/logger" );
const logger = console

// Validates JWT authorization token sent in header by our own backend
module.exports = function (req, res, next) {
  const token = req.headers["authorization"] || req.body.token
  const SECRET = process.env.JWT_SECRET
  console.log('body', req.body)
  if (!token) {
    return res.unauthorized();
  }

  jwt.verify(token, SECRET, function (err, decoded) {
    if (err) {
      return res.json({
        success: false,
        message: "Failed to authenticate token.",
      });
    }
    req.user = decoded;
    return next();
  });

};