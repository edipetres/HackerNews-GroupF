const postsRouter = require('./posts/router')

module.exports = ( app ) => {
  // app.use( "/session", sessionRouter );
  // app.use( "/users", usersRouter );
  app.use( "/posts", postsRouter );
};