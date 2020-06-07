const organizationDomain = require('../../../domain/organization');

module.exports = {
  Query: {
    organizations() {
      return organizationDomain.findAll();
    },
    organizationById(_, { id }) {
      return organizationDomain.findById(id);
    },
  },
  Organization: {
    __resolveReference(ref) {
      return organizationDomain.findById(ref.id)
    }
  }
};
