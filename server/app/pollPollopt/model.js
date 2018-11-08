const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pollPollopt = new Schema({
	postTitle: {
		type: String,
	},
	postText: {
		type: String,
	},
	sequenceId: {
		type: Number, 
		required: true
	},
	postType: {
		type: String,
		required: true
	},
	parentId: {
		type: Number,
	},
	username: {
		type: String,
		required: true
	},
	postUrl: {
		type: String,
	}
}, {
	timestamps: true,
})


module.exports = mongoose.model("PollPollopt", pollPollopt);