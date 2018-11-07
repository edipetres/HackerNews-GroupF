const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const storySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  sequenceId: {
    type: Number,
    required: true
  },
  content: {
    type: String
  },
  username: {
    type: String,
    required: true
  },
  url: {
    type: String,
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