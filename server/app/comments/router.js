
require( "./model" );
const validateToken = require( "../../middlewares/validateToken" );
const controller = require( "./controller" );

const express = require( "express" );
const router = express.Router( );

// api route: /comments

router.get( "/newcomments", controller.newComments );
// router.post('/login', controller.login)
// router.put( "/edit", validateToken, controller.edit );
// router.delete( "/delete", validateToken, controller.delete );

module.exports = router;