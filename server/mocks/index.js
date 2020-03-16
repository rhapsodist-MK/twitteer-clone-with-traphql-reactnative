const faker = require('faker') // 가짜 데이터 만들기

const Tweet = require('../models/Tweet')
const User = require('../models/User')

const TWEET_TOTAL = 10
const USERS_TOTAL = 3

module.exports = async () => {
  try {
    await Tweet.remove()
    await User.remove()

    await Array.from({length: USERS_TOTAL}).forEach(async (_, i) => {
      const user = await User.create({
        username: faker.internet.userName(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        avatar: `https://randomuser.me/api/portraits/women/${i}.jpg`,
        password: 'qweqwe'
      })

      await Array.from({length: TWEET_TOTAL}).forEach(async () => {
        await Tweet.create({ 
          text: faker.lorem.sentence(),
          user: user._id
        })
      })
    })
    
  } catch (err) {
    throw err
  }
}