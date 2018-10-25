const usersRouter = require('./user/router')
const postRouter = require('./post/router')
const commentRouter = require('./comment/router')

module.exports = ( app ) => {
  app.use( "/users", usersRouter );
  app.use( "/post", postRouter );
  app.use( "/comment", commentRouter );
};