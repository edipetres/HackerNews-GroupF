const mongoose = require("mongoose");
const Comment = mongoose.model('Comment')

// return list of commenst (as mongodb objects)
exports.getNewComments = async (req, res) =>  {
  // get comments from DB (20 latest)
  const comments = {}
  
  
  
  return comments
}