const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const storySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  storyid: {
    type: Number,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  url: {
    type: String,
    required: true
  },
  votecount: {
    type: Number,
    required: true
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model("Story", storySchema);