var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
  const hardcodedPosts = [
    {
      id: 1,
      title: "Best Story",
      dateAdded: new Date(),
      user: {
        userName: "Tom",
        userId: 1
      },
      articleUrl: 'www.facebook.com',
      votes: 188,
      commentCount: 13
    },
    {
      id: 2,
      title: "Best Story 2",
      dateAdded: new Date(),
      user: {
        userName: "Tom",
        userId: 1
      },
      userId: 2,
      articleUrl: 'www.google.com',
      votes: 39,
      commentCount: 56
    },
    {
      id: 3,
      title: "Best Story 3",
      dateAdded: new Date(),
      user: {
        userName: "Tom",
        userId: 1
      },
      userId: 3,
      articleUrl: 'www.google.com',
      votes: 96,
      commentCount: 33
    },
    {
      id: 4,
      title: "Best Story 4",
      dateAdded: new Date(),
      user: {
        userName: "Tom",
        userId: 1
      },
      userId: 4,
      articleUrl: 'www.google.com',
      votes: 48,
      commentCount: 3
    },
    {
      id: 5,
      title: "Best Story 5",
      dateAdded: new Date(),
      user: {
        userName: "Tom",
        userId: 1
      },
      userId: 5,
      articleUrl: 'www.google.com',
      votes: 78,
      commentCount: 155
    },
  ]

  res.json(hardcodedPosts)
})

module.exports = router