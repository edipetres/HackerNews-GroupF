const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGO_URL

exports.getLatestDigest = async function (req, res) {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true
  })

  const db = client.db('hackernews');
  try {
    let latestComment = await db.collection('comments').find({}).sort({createdAt: -1}).limit(1)
    latestComment = await latestComment.toArray()
    let latestId = latestComment[0].hanesstId
    res.send(latestId.toString())
  } catch (error) {
    res.serverError(error)
  } finally {
    client.close()
  }
}
