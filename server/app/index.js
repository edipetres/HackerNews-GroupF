const postsRouter = require('./posts/router')
const usersRouter = require('./users/router')

module.exports = ( app ) => {
  // app.use( "/session", sessionRouter );
  app.use( "/users", usersRouter );
  app.use( "/posts", postsRouter );
};