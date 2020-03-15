const User = require('../../models/user')

module.exports = {
  signup: async ({fullName, ...rest}, req) => {
    const [firstName, lastName] = fullName.split(' ')
    return await User.create({firstName, lastName, ...rest})
  },
  login: async (args, req) => {
    const { email, password} = args
    const user = await User.findOne({email})

    if (!user) throw new Error('User not exist!')
    if (!user.authenticateUser(password)) throw new Error('Password not match!')

    return user
  }
}