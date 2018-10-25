const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const customResponses = require('./server/middlewares/customResponses')

const status = require('./server/status')
const posts = require('./server/posts')

if (process.env.NODE_ENV !== 'production') {
  console.info('Loading dotenv')
  require('dotenv').load();
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json())
app.use(customResponses)

app.use('/posts', posts)

require('./server/config/mongoose')(app) // Initialize mongoDB
require('./server/app/index')(app) // Initialize router

app.get('/', (req, res) => res.send('Hello World is deployed by the CI chain!'))
app.use('/status', status)


const logger = console
app.listen(port, () => logger.log(`REST API listening on port ${port}!`))