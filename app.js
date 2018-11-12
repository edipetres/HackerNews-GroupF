const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
let logger = require('./server/utilities/logger')

const customResponses = require('./server/middlewares/customResponses')

const status = require('./server/status')

logger.info("Testing winston")

const ENV = process.env.NODE_ENV !== 'production' ? 'development' : 'production'
if (ENV !== 'production') {
  logger.info('Loading dotenv in ' + ENV + ' mode')
  require('dotenv').load();
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  //intercepts OPTIONS method
  if ('OPTIONS' === req.method) {
    res.send(200);
  } else {
    next();
  }
})

app.use(bodyParser.json())
app.use(customResponses)


require('./server/config/mongoose')(app) // Initialize mongoDB
require('./server/app/index')(app) // Initialize router
app.use('/latest', require('./server/app/digest/router'))

app.get('/', (req, res) => res.send('Hackernews project backend from group F - Cphbusiness 2018 Fall'))
app.use('/status', status)


app.listen(port, () => logger.info(`REST API listening on port ${port}!`))