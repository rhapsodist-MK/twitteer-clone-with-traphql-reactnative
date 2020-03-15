const Tweet = require('../../models/Tweet')

module.exports = {
  getTweet: async ({_id}, res) => {
    return await Tweet.findById(_id)
  },
  getTweets: async (args, res) => {
    return await Tweet.find({}).sort({createdAt: -1})
  },
  createTweet: async (args, res) => {
    return await Tweet.create(args)
  },
  updateTweet: async ({_id, ...rest}, res) => {
    return await Tweet.findByIdAndUpdate(_id, rest, { new: true }) // rest는 _id를 제외한 나머지 모두
    // findByIdAndUpdate는 작업 전의 obj를 return함, 때문에 {new: true}를 붙여 새롭게 업데이트된 obj를 return 시킬 수 있음
  },
  deleteTweet: async ({_id}, res) => {
    try {
      await Tweet.findByIdAndRemove(_id)
      return {
        message: 'Delete Success!'
      }
    } catch (err) {
      throw err
    }
  }
}