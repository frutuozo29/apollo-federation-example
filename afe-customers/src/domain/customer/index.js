const { customers } = require('../../database')

module.exports.findAll = async (org_id) =>
  customers.filter(customer => customer.org_id === parseInt(org_id))

module.exports.findById = async (org_id, id) =>
  customers.find(customer => customer.org_id === parseInt(org_id) && customer.id === parseInt(id))
