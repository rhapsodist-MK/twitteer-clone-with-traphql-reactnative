const mongoose = require('mongoose')
const { Schema } = mongoose

const { hashSync, compareSync } = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  firstName: String,
  lastName: String,
  avatar: String,
  email: String,
  password: String
}, {
  timestamps: true
})

UserSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password)
    next()
  }

  next()
})

UserSchema.methods = {
  _hashPassword(password) {
    return hashSync(password)
  },
  authenticateUser(password) {
    return compareSync(password, this.password)
  },
  createToken() {
    return jwt.sign({
      _id: this._id
    }, process.env.JWT_SECRET)
  }
}


let user
try {
  sled = mongoose.connection.model('User')
} catch (e) {
  user = mongoose.model('User', UserSchema)
}

module.exports = user