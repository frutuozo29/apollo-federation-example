const customerDomain = require('../../../domain/customer');

module.exports = {
  Query: {
    customers(_, __, { org_id }) {
      return customerDomain.findAll(org_id);
    },
    customerById(_, { id }, { org_id }) {
      return customerDomain.findById(org_id, id);
    },
  },
  Mutation: {},
  Customer: {
    organization(customer) {
      return { __typename: 'Organization', id: customer.org_id }
    }
  },
  Organization: {
    customers(organization) {
      return customerDomain.findAll(organization.id)
    }
  }
};
