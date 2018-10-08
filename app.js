const express = require('express')
const app = express()
const port = 3000

const status = require('./server/status')
const posts = require('./server/posts')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => res.send('Hello World is deployed by the CI chain!'))
app.use('/status', status)
app.use('/posts', posts)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))