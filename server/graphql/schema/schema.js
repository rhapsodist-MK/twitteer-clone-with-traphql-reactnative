module.exports = `
  scalar Date

  type States {
    message: String!
  }

  type Tweet {
    _id: ID!
    text: String!
    user: User!
    favoriteCount: Int!
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

  type Auth {
    token: String!
  }

  type Me {
    _id: ID!
    username: String,
    email: String!,
    firstName: String
    lastName: String
    avatar: String
    createdAt: Date!
    updatedAt: Date!
  }

  type Query {
    getTweet(_id: ID!): Tweet
    getTweets: [Tweet]
    login(email: String!, password: String!): Auth
    me: Me
  }

  type Mutation {
    createTweet(text: String!): Tweet
    updateTweet(_id: ID!, text: String): Tweet
    deleteTweet(_id: ID!): States
    signup(email: String!, fullName: String!, password: String!, avatar: String, username: String): Auth
  }

  schema {
    query: Query
    mutation: Mutation
  }
`
// scalar Date : Date를 처리해줌 (yarn add graphql-date 필요)