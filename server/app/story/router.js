require( "./model" );
const express = require( "express" );
const router = express.Router( );
const controller = require( "./controller" );
const validateUser = require('../../middlewares/validateUser')


// path: .com/story

router.post('/', validateUser, controller.create)
router.get('/', controller.getStories)
router.post('/vote/:id', validateUser, controller.vote)

module.exports = router;