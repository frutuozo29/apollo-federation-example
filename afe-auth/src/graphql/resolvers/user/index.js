const userDomain = require('../../../domain/user');

module.exports = {
  Query: {
    users(_, __, { org_id }) {
      return userDomain.findAll(org_id);
    },
    userById(_, { id }, { org_id }) {
      return userDomain.findById(org_id, id);
    },
  },
  Mutation: {
    login(_, { input: { email, password } }) {
      return userDomain.login(email, password)
    }
  }
};
