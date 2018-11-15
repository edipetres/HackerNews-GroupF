const repository = require('./repository')
const logger = require('../../utilities/logger')

exports.create = async function (req, res) {
  try {
    const data = {
      postTitle: req.body.post_title,
      postText: req.body.post_text,
      sequenceId: req.body.hanesst_id,
      postType: req.body.post_type,
      parentId: req.body.post_parent,
      username: req.body.username,
      postUrl: req.body.post_url      
    }

    const savedPollPollopt = await repository.create(data)
    return res.success()
  }
  catch (err) {
    return res.serverError('Could not save PollPollopt' + err)
  }
}