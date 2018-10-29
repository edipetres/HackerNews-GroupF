
const repository = require('../app/user/repository')

// Validates authorization token sent in header by Helge
module.exports = async function (req, res, next) {
  const token = req.headers["authorization"];

  if (token) {
    const b64Encoded = token.split(' ')[1].split("'")[1]
    const tokenValue = new Buffer(b64Encoded, 'base64').toString('binary')
    const username = req.body.username = tokenValue.split(':')[0]
    const password = tokenValue.split(':')[1]

    try {
      const savedUser = await repository.loginUser({ username, password })
      if (savedUser) {
        return next()
      }
    } catch (error) {
      console.log(error)
      return res.unauthorized()
    }
  }

  return res.unauthorized('Token not found.');
};
