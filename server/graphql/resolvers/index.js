const graphqlDate = require('graphql-date')

const { getTweet, getTweets, createTweet, updateTweet, deleteTweet, getUserTweets } = require('./tweetResolver')
const { signup, login, me } = require('./userResolver')

const User = require('../../models/User')

module.exports = {
  Date: graphqlDate,
  Tweet: {
    user: ({user}) => User.findById(user)
  },
  Query: {
    getTweet, getTweets, getUserTweets, me, login
  },
  Mutation: {
    createTweet, updateTweet, deleteTweet, signup
  }
}