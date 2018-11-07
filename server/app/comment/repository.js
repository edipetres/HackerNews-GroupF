const mongoose = require("mongoose");
const Comment = mongoose.model('Comment')
const Story = mongoose.model('Story')

// return list of latest comments and their corresponding stories
exports.getNewComments = async () =>  {
  const commentsWithStories = []
  const comments = await Comment.find().sort({createdAt: -1}).limit(30)
  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];
    const story = await Story.findOne({sequenceId: comment.parentId})

    commentsWithStories.push({
      comment,
      story
    })
  }
  return commentsWithStories
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