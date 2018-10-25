
require( "./model" );
// const validateToken = require( "../../middlewares/validateToken" );
const controller = require( "./controller" );

const express = require( "express" );
const router = express.Router( );

// api route: /comments
router.post('/', controller.create)
router.get( "/new", controller.newComments );

module.exports = router;