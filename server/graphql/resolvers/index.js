const graphqlDate = require('graphql-date')
const TweetResolver = require('./tweetResolver')
const UserResolver = require('./userResolver')

const rootResolver = {
  Date: graphqlDate,
  ...TweetResolver,
  ...UserResolver
}

module.exports = rootResolver