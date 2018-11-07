const mongoose = require("mongoose");
const Comment = mongoose.model('Comment')

// return list of commenst (as mongodb objects)
exports.getNewComments = async () =>  {
  // get comments from DB (20 latest)
  return Comment.find().sort({createdAt: -1}).limit(20)
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