
require( "./model" );
const controller = require( "./controller" );
const validateUser = require('../../middlewares/validateUser')

const express = require( "express" );
const router = express.Router( );

// api route: /comment
router.post('/', controller.create);
router.get('/new', controller.newComments );
router.get('/story/:id', controller.getCommentsByStory)
router.post('/vote/:id', validateUser, controller.vote)

module.exports = router;