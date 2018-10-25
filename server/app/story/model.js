const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const storySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  storyId: {
    type: Number,
    required: true
  },
  content: {
    type: String
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  url: {
    type: String,
    required: true
  },
  voteCount: {
    type: Number,
    required: true
  }
}, {
  timestamps: true,
});

// storySchema.methods.setTitle = function (title){

// } 

module.exports = mongoose.model("Story", storySchema);