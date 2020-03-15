const faker = require('faker') // 가짜 데이터 만들기

const Tweet = require('../models/Tweet')

const TWEET_TOTAL = 10

module.exports = async () => {
  try {
    await Tweet.remove()
    
    await Array.from({length: TWEET_TOTAL}).forEach(async () => {
      await Tweet.create({ text: faker.lorem.paragraphs(1) })
    })
  } catch (err) {
    throw err
  }
}