const repository = require('./repository')

exports.newComments = async (req, res) => {
  try {
    // get list of comments here
    const comments = await repository.getNewComments()
    res.success(comments);
  }catch (err) {
    res.send(err)
  }
}