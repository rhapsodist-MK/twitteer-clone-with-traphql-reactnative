// const mongoose = require('mongoose')

// // const constants = require('./constants')


// mongoose.Promise = global.Promise

// mongoose.set('debug', true)

// try {
//   mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
// } catch (err) {
//   mongoose.createConnection(process.env.MONGODB_URI, { useMongoClient: true })
// }

// mongoose.connection
//   .once('open', () => console.log('MongoDB Running'))
//   .on('error', e => {
//     throw e
//   })


const mongoose = require('mongoose')
const connection = process.env.MONGODB_URI || 'mongodb://localhost:27017/tweet-development'

mongoose.set('debug', true)
const connectDb = () => {
    return mongoose.connect(connection)
}

console.log('####################################')
module.exports = connectDb