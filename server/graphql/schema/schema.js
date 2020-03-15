const { buildSchema } = require('graphql')

module.exports = buildSchema(`
  scalar Date

  type States {
    message: String!
  }
  type Tweet {
    _id: ID!
    text: String!
    createdAt: Date!
    updatedAt: Date!
  }

  type RootQuery {
    getTweet(_id: ID!): Tweet
    getTweets: [Tweet]
  }

  type RootMutation {
    createTweet(text: String!): Tweet
    updateTweet(_id: ID!, text: String): Tweet
    deleteTweet(_id: ID!): States
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`)

// scalar Date : Date를 처리해줌 (yarn add graphql-date 필요)