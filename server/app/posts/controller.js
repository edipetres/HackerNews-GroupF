const utilities = require( "../../utilities" );
const repository = require( "./repository" );

exports.create = async( req, res ) => {
    try {
        let story = {};
        //const story = req.body
        story.title = req.body.post_title
        story.content = req.body.post_text
        story.storyId = req.body.hanesst_id
        story.author_id = req.body.username
        story.url = req.body.post_url
        story.voteCount = 0
        console.log(story)
        const savedStory = await repository.createStory( story );
        console.log(savedStory.title + "Was succesfully create ")
        res.success( utilities.extractObject(
        savedStory,
        [ "title"],
        ) );
    } catch ( err ) {
        res.send( err );
    }
};

exports.update = ( req, res ) => {
    res.success( );
};

exports.delete = ( req, res ) => {
    res.success( );
};

exports.list = async ( req, res ) => {
    try {
        const story = await repository.findStory();
        res.success( story );
    } catch ( err ) {
        res.send( err );
    }
};

exports.detail = async ( req, res ) => {
    try {
        const details = await repository.findDetails( req.params.id );
        res.success( details );
    } catch ( err ) {
        res.send( err );
    }
};