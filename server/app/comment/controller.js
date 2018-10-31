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
      post_parent: 0
    }
    // username and password are encoded in the Authorization header
    const result = validator(expectedPayload, req.body, ['post_text', 'hanesst_id', 'username', 'post_parent'], false)
    if (result.success !== true) {
      logger.error('Failed to process following request:', req.body)
      return res.preconditionFailed(result.errorMessage)
    }

    let comment = {}
    comment.content = result.payload.post_text
    comment.username = result.payload.username
    comment.sequenceId = result.payload.hanesst_id
    comment.parentId = result.payload.post_parent
    comment.votes = 0

    const savedComment = await repository.create(comment)
    return res.success(extractObject(savedComment, ['_id', 'username']))
  } catch (err) {
    res.serverError()
  }
}

exports.getCommentsByStory = async (req, res) => {
  try {
    const storyId = req.params.id
    if (!storyId) {
      return res.preconditionFailed('Cannot serve comment by story ID: parameter storyId missing')
    }

    const comments = await repository.getCommentByStoryId(storyId)
    return res.success(comments)
  } catch (error) {
    return res.serverError(error)
  }
}