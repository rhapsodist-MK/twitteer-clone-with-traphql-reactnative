const mongoose = require('mongoose')
const {Schema} = mongoose

const TweetSchema = new Schema({
  text: String
}, {
  timestamps: true
})

module.exports = mongoose.model('Tweet', TweetSchema)