const { User } = require('../models')

const userdata = [
  {
    username: 'joe',
    email: 'joe@email.com',
    password: 'joe',
  },
  {
    username: 'test',
    email: 'test@mail.com',
    password: 'test',
  },
]

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true })

module.exports = seedUsers
