const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
let logger = console

const customResponses = require('./server/middlewares/customResponses')

const status = require('./server/status')
const post = require('./server/app/post/router')

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

app.get('/', (req, res) => res.send('Hello World is deployed by the CI chain!'))
app.use('/status', status)


app.listen(port, () => logger.log(`REST API listening on port ${port}!`))