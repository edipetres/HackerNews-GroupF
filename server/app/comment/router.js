
require( "./model" );
const controller = require( "./controller" );

const express = require( "express" );
const router = express.Router( );

// api route: /comments
router.post('/', controller.create)
router.get('/new', controller.newComments );
router.get('/story/:id', controller.getCommentsByStory)

module.exports = router;