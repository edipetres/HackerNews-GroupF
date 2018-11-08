const mongoose = require("mongoose");
const Comment = mongoose.model('Comment')

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

exports.vote = async (commentId) => {
  return await Comment.findOneAndUpdate({_id: commentId}, {$inc: {votes: 1}})
}