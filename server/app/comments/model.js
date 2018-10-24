const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    commentId: {
        type: Number,
        required: true
    },
    parentId: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true,
})