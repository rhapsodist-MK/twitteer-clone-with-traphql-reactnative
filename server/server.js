const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.listen(port, err => console.log(`server is up in prot ${port}`))