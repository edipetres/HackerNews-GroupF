require('./model')
const mongoose = require( "mongoose" );

const Story = mongoose.model( "Story" );
// const User = mongoose.model( "User" );

const createStory = async ( user, data ) => {
    const { id } = user;

    const story = new Story( data );
    story.authorId = await User.findOne( { id } );
    const query = await story.save();
    return query;
};

const findStory = () => Story.find( );

const findDetails = ( id ) => Story.findOne( { _id: id } );

module.exports = {
    createStory,
    findStory,
    findDetails,
};