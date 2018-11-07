const jwt = require("jsonwebtoken");
const repository = require('../app/user/repository')

// const logger = require( "../utilities/logger" );
const logger = console
const SECRET = process.env.JWT_SECRET

// Validates JWT authorization token sent in header by our own backend
module.exports = function (req, res, next) {
  const helgeToken = req.headers["authorization"]
  const jwtToken = req.body.token

  if (!helgeToken && !jwtToken ) {
    return res.unauthorized();
  }

  if (helgeToken) {
    return validateAuthHeader(helgeToken, req, res, next)
  }
  
  if (jwtToken) {
    return validateJWT(jwtToken, req, res, next)
  }
};

function validateJWT(token, req, res, next) {
  jwt.verify(token, SECRET, function (err, decoded) {
    if (err) {
      return res.json({
        success: false,
        message: "Failed to authenticate token.",
      });
    }
    req.body.username = decoded.username;
    return next();
  });
}

async function validateAuthHeader(token, req, res, next) {
  const b64Encoded = token.split(' ')[1].split("'")[1]
  const tokenValue = new Buffer(b64Encoded, 'base64').toString('binary')
  const username = tokenValue.split(':')[0]
  const password = tokenValue.split(':')[1]

  try {
    const savedUser = await repository.loginUser({ username, password })
    if (savedUser) {
      return next()
    }
  } catch (error) {
    logger.log(error)
    return res.unauthorized()
  }
}