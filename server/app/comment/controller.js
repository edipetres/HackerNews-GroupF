require('./model')
const repository = require('./repository')
const extractObject = require('../../utilities/index').extractObject
const validator = require('../../utilities/validator')
const logger = console

exports.newComments = async (req, res) => {
  try {
    const comments = await repository.getNewComments()
    return res.success(comments)
  } catch (err) {
    res.serverError(err)
  }
}

exports.create = async (req, res) => {
  try {
    const expectedPayload = {
      post_text: '',
      hanesst_id: 0,
      username: '',
      pwd_hash: ''
    }
    // username and password are encoded in the Authorization header
    const result = validator(expectedPayload, req.body, ['post_text', 'hanesst_id', 'username', 'pwd_hash'], false)
    if (result.success !== true) {
      logger.error('Failed to process following request:', req.body)
      return res.preconditionFailed(result.errorMessage)
    }

    let comment = {}
    comment.content = result.payload.post_text
    comment.username = result.payload.username
    comment.parentId = result.payload.hanesst_id
    comment.votes = 0

    const savedComment = await repository.create(comment)
    return res.success(extractObject(savedComment, ['_id', 'username']))
  } catch (err) {
    res.serverError()
  }
}