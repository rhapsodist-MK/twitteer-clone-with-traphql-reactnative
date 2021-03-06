const Tweet = require('../../models/Tweet')

const {requireAuth} = require('../../services/auth')

module.exports = {
  getTweet: async (_, {_id}, { user }) => { // 3번째 인자는 context
    try {
      await requireAuth(user)
      return await Tweet.findById(_id)
    } catch (err) {
      throw err
    }
  },
  getTweets: async (_, args, { user }) => {
    try {
      await requireAuth(user)
      return await Tweet.find({}).sort({createdAt: -1})
    } catch (err) {
      throw err
    }
  },
  getUserTweets: async (_, args, { user }) => {
    try {
      await requireAuth(user)
      return await Tweet.find({user: user._id}).sort({createdAt: -1})
    } catch (err) {
      throw err
    }
  },
  createTweet: async (_, args, { user }) => {
    try {
      await requireAuth(user)
      return await Tweet.create({...args, user: user._id})
    } catch (err) {
      throw err
    }
  },
  updateTweet: async (_, {_id, ...rest}, { user }) => {
    try {
      await requireAuth(user)
      // return await Tweet.findByIdAndUpdate(_id, rest, { new: true }) // rest는 _id를 제외한 나머지 모두
      // // findByIdAndUpdate는 작업 전의 obj를 return함, 때문에 {new: true}를 붙여 새롭게 업데이트된 obj를 return 시킬 수 있음

      const tweet = await Tweet.findOne({ _id, user: user._id })

      if (!tweet) throw new Error('Not found!')

      Object.entries(rest).forEach(([key, value]) => {   // entries: 객체 자체의 enumerable 속성 [key, value] 쌍의 배열을 반환합니다.
        tweet[key] = value
      })

      return tweet.save()
    } catch (err) {
      throw err
    }
  },
  deleteTweet: async (_, {_id}, { user }) => {
    try {
      await requireAuth(user)
      // await Tweet.findByIdAndRemove(_id)
      const tweet = await Tweet.findOne({_id, user: user._id})

      if (!tweet) throw new Error('Not found!')
      await tweet.remove()
      return { message: 'Delete Success!' }
    } catch (err) {
      throw err
    }
  }
}