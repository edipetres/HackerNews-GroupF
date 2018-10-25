const mongoose = require("mongoose");
const Comment = mongoose.model('Comment');
const User = mongoose.model('User');

// return list of commenst (as mongodb objects)
exports.getNewComments = async (req, res) =>  {
  // get comments from DB (20 latest)
  const comments = {};
  comments = Comment.find().sort({createdAt:-1}).limit(20);
  
  return comments;
}