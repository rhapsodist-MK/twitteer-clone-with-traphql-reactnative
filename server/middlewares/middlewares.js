const bodyParser = require('body-parser')
const { ApolloServer } = require('apollo-server-express')

const typeDefs = require('../graphql/schema/schema')
const resolvers = require('../graphql/resolvers/index')

// const mocks = require('../mocks/index')

const { decodeToken } = require('../services/auth')

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    if (token != null) {
      const user = await decodeToken(token)
      req.user = user
    } else {
      req.user = null
    }
    next()
  } catch (err) {
    throw err
  }
}

module.exports = async (app) => {
  // mocks()
  // .then(() => {
  app.use(bodyParser.json())
  app.use(auth)

  const schema = new ApolloServer({
    typeDefs, resolvers,
    context: ({req}) => {
      return {user: req.user}
    },
    playground: {
      endpoint: '/graphql',
      setting: {
        'editor.theme': 'light'
      }
    }
  })

  schema.applyMiddleware({app})
  // })
}