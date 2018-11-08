const mongoose = require("mongoose");
const PollPollopt = mongoose.model('PollPollopt')

// return list of latest comments and their corresponding stories
exports.create = async (data) =>  {
  const pollPollopt = new PollPollopt(data)
  return await pollPollopt.save()
}