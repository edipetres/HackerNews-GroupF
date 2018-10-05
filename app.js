const express = require('express')
const app = express()
const port = 3000

const status = require('./server/status')

app.get('/', (req, res) => res.send('Hello World is deployed by the CI chain!'))

app.use('/status', status)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))