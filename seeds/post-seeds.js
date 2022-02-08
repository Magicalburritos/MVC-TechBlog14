const { Post } = require('../models')

const postdata = [
  {
    title: 'test',
    post_url: 'https://google.com',
    user_id: 1,
  },
]
const seedPosts = () => Post.bulkCreate(postdata)

module.exports = seedPosts
