
const express = require('express')
const router = express.Router()
const controller = require('./controller')

// TODO set up endpoint
// endpoint address: website.com/latest
router.get('/', controller.getLatestDigest)

module.exports = router