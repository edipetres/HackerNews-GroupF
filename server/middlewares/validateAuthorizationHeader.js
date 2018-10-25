
// Validates authorization token sent in header by Helge
module.exports = function (req, res, next) {
  const token = req.headers["authorization"];
  
  if (token) {
    const b64Encoded = token.split(' ')[1].split("'")[1]
    const tokenValue = new Buffer(b64Encoded, 'base64').toString('binary')
    req.body.username = tokenValue.split(':')[0]
    req.body.pwd_hash = tokenValue.split(':')[1]
    return next()
  }

  return res.unauthorized('Token not found.');
};
