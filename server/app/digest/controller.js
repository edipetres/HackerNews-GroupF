const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGO_URL
const logger = require('../../utilities/logger')
var client

exports.getLatestDigest = async function (req, res) {
  try {
    const latestId = await findLatestId()
    res.send(latestId.toString())
  } catch (error) {
    res.serverError(error)
  } finally {
    client.close()
  }
}

async function findLatestId() {
  const db = await getDBConnection()
  const latestIds = []

  const collectionsToCrawl = ['comments', 'stories'] // TODO: add 'poll', 'pollopt' when db is done

  for (const collectionName of collectionsToCrawl) {
    let latestElement = await db.collection(collectionName).find({}).sort({createdAt: -1}).limit(1).toArray()
    latestIds.push(latestElement[0].sequenceId)
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