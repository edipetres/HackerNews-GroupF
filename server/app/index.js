const usersRouter = require('./user/router')
const postRouter = require('./post/router')
const commentRouter = require('./comment/router')
const validateAuthorizationHeader = require('../middlewares/validateAuthorizationHeader')

module.exports = ( app ) => {
  app.use( "/users", usersRouter );
  app.use( "/post", validateAuthorizationHeader, postRouter );
  app.use( "/comment", commentRouter );
};