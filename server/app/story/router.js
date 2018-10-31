require( "./model" );
const controller = require( "./controller" );
const express = require( "express" );
const router = express.Router( );

// path: .com/story

router.get('/', controller.getStories)

module.exports = router;