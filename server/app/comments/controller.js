const repository = require('./repository')

exports.newComments = async (req, res) => {
  try {
    // get list of comments here
    const comments = await repository.getNewComments()
  } catch (err) {
    res.send(err)
  }
}