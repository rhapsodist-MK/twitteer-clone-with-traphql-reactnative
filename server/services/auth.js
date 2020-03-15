const jwt = require('jsonwebtoken')

const User = require('../models/User')


module.exports = {
  requireAuth: async (user) => {
    if (!user || !user._id) throw new Error('Unauthorized!!!!!!!!')

    const me = await User.findById(user._id)
    if (!me) throw new Error('Unauthorized!!!!!!!!')

    return me
  },

  decodeToken: (token) => {
    const arr = token.split(' ')

    if (arr[0] === 'Bearer') return jwt.verify(arr[1], process.env.JWT_SECRET)

    throw new Error('Token not valid!')
  }
}