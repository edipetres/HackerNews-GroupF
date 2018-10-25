require('./model')
const repository = require('./repository')
const extractObject  = require('../../utilities/index').extractObject

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
    let comment = {}
    comment.content = req.body.post_text
    comment.username = req.body.username
    comment.parentId = req.body.hanesst_id
    comment.votes = 0
    
    const savedComment = await repository.create(comment)
    return res.success(extractObject(savedComment, ['_id', 'username']))
  } catch (err) {
    res.serverError(err)
  }
}