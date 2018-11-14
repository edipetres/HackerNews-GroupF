const mongoose = require("mongoose");
const Comment = mongoose.model('Comment')
const User = mongoose.model('User')
// return list of latest comments and their corresponding stories
exports.getNewComments = async () =>  {
  return await Comment.find().sort({createdAt: -1}).limit(30)
}

exports.create = async (data) => {
  const comment = new Comment(data)
  return comment.save()
}

exports.getCommentByStoryId = async (storyId) => {
  return Comment.find({parentId: storyId})
}
exports.vote = async (commentId, user) => {
  console.log(commentId, user)
  const votes = await User.findOneAndUpdate({username: user}, {$push: {votedComments: commentId}})
  return await Comment.findOneAndUpdate({sequenceId: commentId}, {$inc: {votes: 1}})
}