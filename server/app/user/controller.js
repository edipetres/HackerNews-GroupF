const extractObject = require("../../utilities/").extractObject;
const logger = require('../../utilities/logger')
const repository = require("./repository");
const payloadCheck = require('payload-validator')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
  // Validate payload
  logger.info('Saving user: ' + req.body.username)
  const result = payloadCheck.validator(req.body, { username: '', password: ''}, ['username', 'password'], false)
  if (result.success !== true) return res.preconditionFailed(result.response.errorMessage)

  const user = result.elements
  try {
    // Check if user already exists
    const existingUser = await repository.findUser(user.username)
    if (existingUser) {
      return res.preconditionFailed(user.username + ' already exists.')
    }

    const savedUser = await repository.saveUser(user);
    res.success(extractObject(
      savedUser,
      ["id", "username"],
    ));
  } catch (err) {
    res.serverError(err);
  }
};

exports.login = async (req, res) => {
  // Validate payload
  const expectedPayload = { username: '', password: ''}
  const incomingPayload = req.body
  const result = payloadCheck.validator(incomingPayload, expectedPayload, ['username', 'password'], false)
  if (result.success !== true) {
    return res.preconditionFailed(result.response.errorMessage)
  }
  const user = result.elements

  try {
    const savedUser = await repository.loginUser(user)
    if (!savedUser) return res.preconditionFailed('Wrong token.')
    
    const token = generateJWT(savedUser)
    return res.json({
      success: true,
      token: token,
      votes: savedUser.votedStories,
      cvotes: savedUser.votedComments

    })
  } catch (err) {
    res.preconditionFailed(err.message)
  }
}

function generateJWT(user) {
  const SECRET = process.env.JWT_SECRET
  return jwt.sign({username: user.username}, SECRET)
}

exports.edit = async (req, res) => {
  try {
    const user = await repository.findUser(req.user.id);
    const editedUser = await repository.editUser(user, req.body);
    res.success(extractObject(
      editedUser,
      ["id", "username"],
    ));
  } catch (err) {
    res.send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const user = await repository.findUser(req.user.id);
    const deletedUser = await repository.deleteUser(user, req.body);
    logger.info('Deleted user ' + deletedUser);
    return res.success(extractObject(
      deletedUser,
      ["id", "username"],
    ));
  } catch (err) {
    return res.serverError(err);
  }
};