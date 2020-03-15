const express = require('express')
const bodyParser = require('body-parser')

const graphqlHttp = require('express-graphql')
const graphQlSchema = require('./graphql/schema/schema')
const graphQlResolvers = require('./graphql/resolvers/index')

const mocks = require('./mocks/index')

const connectDb = require('./config/db')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000


connectDb().then(async () => {
  app.use(bodyParser.json())
  
  mocks()
  .then(() => {
    app.use('/graphql', graphqlHttp({
      schema: graphQlSchema,
      rootValue: graphQlResolvers,
      graphiql: (process.env.GRAPHIQL == 'true')
    }))
  
    app.listen(port, err => console.log(`server is up in prot ${port}`))
  })
})
.catch((ex) => {
  console.err(ex.stack)
  process.exit(1)
})