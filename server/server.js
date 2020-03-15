const express = require('express')

const connectDb = require('./config/db')
const middlewares = require('./middlewares/middlewares')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000


connectDb().then(async () => {
  middlewares(app)
  app.listen(port, err => console.log(`server is up in prot ${port}`))
})
.catch((ex) => {
  console.err(ex.stack)
  process.exit(1)
})