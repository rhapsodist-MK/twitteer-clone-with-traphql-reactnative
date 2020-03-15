const User = require('../../models/User')

const { requireAuth } = require('../../services/auth.js')

module.exports = {
  signup: async ({fullName, ...rest}, req) => {
    try {
      const [firstName, lastName] = fullName.split(' ')
      const user = await User.create({firstName, lastName, ...rest})
  
      return { token: user.createToken() }
    } catch (err) {
      throw err
    }
  },
  login: async (args, req) => {
    try {
      const { email, password} = args
      const user = await User.findOne({email})
  
      if (!user) throw new Error('User not exist!')
      if (!user.authenticateUser(password)) throw new Error('Password not match!')
  
      return { token: user.createToken() }
    } catch (err) {
      throw err
    }
  },
  me: async (args, {user}) => {
    try {
      return await requireAuth(user)
    } catch (err) {
      throw err
    }
  }
}