const { organizations } = require('../../database')

module.exports.findAll = async () => organizations

module.exports.findById = async (id) => organizations.find(organization => organization.id === parseInt(id))
