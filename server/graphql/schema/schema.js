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

  type User {
    _id: ID!
    username: String,
    email: String!,
    firstName: String
    lastName: String
    avatar: String
    createdAt: Date!
    updatedAt: Date!
  }

  type RootQuery {
    getTweet(_id: ID!): Tweet
    getTweets: [Tweet]
    login(email: String!, password: String!): User
  }

  type RootMutation {
    createTweet(text: String!): Tweet
    updateTweet(_id: ID!, text: String): Tweet
    deleteTweet(_id: ID!): States
    signup(email: String!, fullName: String!, password: String!, avatar: String, username: String): User
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`)

// scalar Date : Date를 처리해줌 (yarn add graphql-date 필요)