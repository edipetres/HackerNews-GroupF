require( "./model" );
const express = require( "express" );
const router = express.Router( );
const controller = require( "./controller" );
const validateToken = require('../../middlewares/validateToken')

// path: .com/story

router.post('/', controller.create)
router.get('/', controller.getStories)
router.post('/vote/:id', validateToken, controller.vote)

module.exports = router;