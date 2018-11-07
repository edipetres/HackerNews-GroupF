const usersRouter = require('./user/router')
const postRouter = require('./post/router')
const commentRouter = require('./comment/router')
const storyRouter = require('./story/router')
const validateUser = require('../middlewares/validateUser')

module.exports = ( app ) => {
  app.use( "/user", usersRouter );
  app.use( "/post", validateUser, postRouter );
  app.use( "/comment", commentRouter );
  app.use('/story', storyRouter)
};