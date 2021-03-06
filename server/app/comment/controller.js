const storyRepository = require('../story/repository')
const commentRepository = require('./repository')
const extractObject = require('../../utilities/index').extractObject
const validateId = require('../../utilities/index').validateId
const validator = require('../../utilities/validator')
const logger = require('../../utilities/logger')

exports.newComments = async (req, res) => {
  try {
    const comments = await commentRepository.getNewComments()
    
    return res.success(comments)
  } catch (err) {
    res.serverError(err)
  }
}
exports.checkUserVoted = async (req, res) => {
  try {
    const vote = await repository.checkVote(req.body.hanesst_id)
    return res.success({
      answer: vote[0].voters.includes(req.body.username)
    })
  } catch (err) {
    return res.serverError(err)
  }
}
exports.create = async (req, res) => {
  try {
    const expectedPayload = {
      post_text: '',
      username: '',
      hanesst_id: 0,
      post_parent: 0
    }
    // username and password are encoded in the Authorization header

    const result = validator(expectedPayload, req.body, ['post_text', 'hanesst_id', 'username', 'post_parent'], false)
    if (result.success !== true) {
      logger.error('Failed to process following request:' + req.body)
      return res.preconditionFailed(result.errorMessage)
    }

    let comment = {}
    comment.content = result.payload.post_text
    
    comment.username = req.body.username;
    comment.sequenceId = result.payload.hanesst_id
    comment.parentId = result.payload.post_parent
    comment.votes = 0

    const savedComment = await commentRepository.create(comment)
    return res.success(extractObject(savedComment, ['_id', 'username']))
  } catch (err) {
    return res.serverError(err)
  }
}

exports.getCommentsByStory = async (req, res) => {
  try {
    const result = validateId(req.params.id)
    if (result.success !== true) {
      return res.preconditionFailed(result.errorMessage)
    }

    const story = await storyRepository.findStory(req.params.id)
    const comments = await commentRepository.getCommentByStoryId(req.params.id)

    const payload = {
      story, 
      comments
    }
    return res.success(payload)
  } catch (error) {
    return res.serverError(error)
  }
}

exports.vote = async (req, res) => {
  
  const commentId = req.params.id
  const validationResult = validateId(commentId)
  
  if (validationResult.success !== true) {
    return res.preconditionFailed(validationResult.errorMessage)
  }
  console.log(commentId, req.body.username)
  try {
    const updatedComment = await commentRepository.vote(commentId, req.body.username)
    res.success({
      comment: updatedComment
    })
  } catch (err) {
    return res.serverError(err)
  }
}
