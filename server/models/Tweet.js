const mongoose = require('mongoose')
const {Schema} = mongoose

const TweetSchema = new Schema({
  text: {
    type: String,
    minlength: [5, 'Text need to be longer then 5 char'],
    maxlength: [144, 'Text is too long']
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  favoriteCount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Tweet', TweetSchema)