const mongoose = require('mongoose')
const mongoUrl = process.env.MONGO_URL

module.exports = function (app) {
  mongoose.connect(mongoUrl,  { useNewUrlParser: true })
  mongoose.Promise = global.Promise

  process.on("SIGINT", cleanUp);
  process.on("SIGTERM", cleanUp);
  process.on("SIGHUP", cleanUp);

  if (app) {
    app.set('mongoose', mongoose)
  }
}

function cleanUp() {
  mongoose.connection.close(function () {
    process.exit(0)
  })
}