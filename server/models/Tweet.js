const mongoose = require('mongoose')
const {Schema} = mongoose

const TweetSchema = new Schema({
  text: String
})

module.exports = mongoose.model('Tweet', TweetSchema)