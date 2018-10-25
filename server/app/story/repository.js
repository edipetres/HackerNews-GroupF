require('./model')
require('../user/model')
const mongoose = require( "mongoose" );

const Story = mongoose.model( "Story" );
const User = mongoose.model( "User" );

const createStory = async ( data ) => {
    const story = new Story( data );
    return story.save();
};

const findStory = () => Story.find( );

const findDetails = ( id ) => Story.findOne( { _id: id } );

module.exports = {
    createStory,
    findStory,
    findDetails,
};