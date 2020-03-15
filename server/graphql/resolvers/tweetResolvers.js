const Tweet = require('../../models/Tweet')

module.exports = {
  getTweets: async (args, res) => {
    return await Tweet.find({})
  }
}