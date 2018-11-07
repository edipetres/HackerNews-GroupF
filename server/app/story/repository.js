require('./model')
require('../user/model')
const mongoose = require( "mongoose" );

const Story = mongoose.model( "Story" );
// const User = mongoose.model( "User" );

const createStory = async ( data ) => {
    const story = new Story( data );
    return story.save();
};

const getStories = async () => {
    const storyLimit = 30
    const stories = await Story.find({}).sort({createdAt: -1}).limit(storyLimit)
    return stories
}

const findStory = async (id) => {
    return await Story.find({sequenceId: id});
}

const findDetails = ( id ) => Story.findOne( { _id: id } );

const vote = async (storyId) => {
    return await Story.findOneAndUpdate({_id: storyId}, {$inc: {voteCount: 1}})
}

module.exports = {
    createStory,
    findStory,
    findDetails,
    getStories,
    vote
};