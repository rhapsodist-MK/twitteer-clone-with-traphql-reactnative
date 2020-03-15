const graphqlDate = require('graphql-date')
const TweetResolvers = require('./tweetResolvers')

const rootResolver = {
  Date: graphqlDate,
  ...TweetResolvers,
}

module.exports = rootResolver