const express = require('express')
const router = express.Router()
const storyController = require('../story/controller')
const commentController = require('../comment/controller')

// Distribute incoming posts
// Endpoint: website.com/post
router.post('/', (req, res) => {
  const post = req.body

  if (!post.hasOwnProperty('post_type')) {
    return res.preconditionFailed('Missing post_type property.')
  }

  switch (post.post_type) {
    case 'story':
      storyController.create(req, res)
      break;
    case 'comment':
      commentController.create(req, res)
      break;
    case 'poll':
      
      break;
    case 'pollopt':
      
      break;
    default:
      // respond here in none of the above post types matched
      res.preconditionFailed('Wrong post_type property.')
      break;
  }
})

module.exports = router