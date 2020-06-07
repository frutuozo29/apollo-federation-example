const jwt = require('jsonwebtoken')
const { users } = require('../../database')

module.exports.findAll = async (org_id) =>
  users.filter(user => user.org_id === parseInt(org_id))

module.exports.findById = async (org_id, id) =>
  users.find(user => user.org_id === parseInt(org_id) && user.id === parseInt(id))

module.exports.login = async (email, password) => {
  const user = users.find(user => user.email === email && user.password === password)

  if (!user) {
    throw new Error('Email or Password is invalid!')
  }

  return jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
      org_id: user.org_id
    },
    process.env.PRIVATE_KEY,
    { expiresIn: '1h' }
  )
}  
