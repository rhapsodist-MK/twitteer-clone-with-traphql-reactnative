const mongoose = require('mongoose')
const connection = process.env.MONGODB_URI || 'mongodb://localhost:27017/tweet-development'

mongoose.set('debug', true)
const connectDb = () => {
    return mongoose.connect(connection)
}

console.log('####################################')
module.exports = connectDb