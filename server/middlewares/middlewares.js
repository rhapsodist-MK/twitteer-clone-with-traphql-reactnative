const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql')

const graphQlSchema = require('../graphql/schema/schema')
const graphQlResolvers = require('../graphql/resolvers/index')

const mocks = require('../mocks/index')

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

module.exports = (app) => {
  app.use(bodyParser.json())
  app.use(auth)
  
  // mocks()
  // .then(() => {
  app.use('/graphql', graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: (process.env.GRAPHIQL == 'true')
  }))
  // })
}