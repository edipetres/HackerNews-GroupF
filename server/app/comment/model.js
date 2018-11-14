const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
	content: {
		type: String,
		required: true
	},
	sequenceId: {
		type: Number,
	},
	parentId: {
		type: Number, 
		required: true
	},
	username: {
		type: String,
		required: true
	},
	voters: {
	  type: Array,
	  required: true
	}
}, {
	timestamps: true,
})

module.exports = mongoose.model("Comment", commentSchema);