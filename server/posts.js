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
      votes: 5555,
      commentCount: 1000
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
      votes: 6666,
      commentCount: 1000
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
      votes: 7777,
      commentCount: 1000
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
      votes: 8888,
      commentCount: 1000
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
      votes: 9999,
      commentCount: 1000
    },
  ]

  res.json(hardcodedPosts)
})

module.exports = router