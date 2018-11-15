const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGO_URL
const logger = require('../../utilities/logger')
var client

exports.getLatestDigest = async function (req, res) {
  try {
    const latestId = await findLatestId()
    res.send(latestId.toString())
  } catch (error) {
    logger.error("Error in server.digest.controller " + res.serverError(error))
    
  } finally {
    client.close()
  }
}

async function findLatestId() {
  const db = await getDBConnection()
  const latestIds = [0]

  const collectionsToCrawl = ['comments', 'stories', 'pollpollopts']

  for (const collectionName of collectionsToCrawl) {
    try {
      let latestElement = await db.collection(collectionName).findOne({}, {sort:{$natural:-1}})
      latestIds.push(latestElement.sequenceId)
    } catch (error) {
      latestIds.push(0)
    }
  }

  if (latestIds.length === 0) {
    return logger.log('Latest digest: Id not found')
  }

  return Math.max(...latestIds).toString()
}

async function getDBConnection() {
  client = await MongoClient.connect(url, {
    useNewUrlParser: true
  })
  return client.db('hackernews');
}