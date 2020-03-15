const express = require('express')
const bodyParser = require('body-parser')


const connectDb = require('./config/db')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000


connectDb().then(async () => {
  app.use(bodyParser.json())
  


  app.listen(port, err => console.log(`server is up in prot ${port}`))
})
.catch((ex) => {
  console.err(ex.stack)
  process.exit(1)
})