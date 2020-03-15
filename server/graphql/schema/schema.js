const { buildSchema } = require('graphql')

module.exports = buildSchema(`
  type Tweet {
    _id: String
    text: String
  }

  type RootQuery {
    getTweets: [Tweet]
  }

  schema {
    query: RootQuery
  }
`)