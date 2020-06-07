const { ApolloServer } = require('apollo-server')
const { buildFederatedSchema } = require('@apollo/federation')

// schemas e resolvers
const organizationSchema = require('../graphql/schemas/organization')
const organizationResolvers = require('../graphql/resolvers/organization')

const userSchema = require('../graphql/schemas/user')
const userResolvers = require('../graphql/resolvers/user')

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs: organizationSchema,
      resolvers: organizationResolvers
    },
    {
      typeDefs: userSchema,
      resolvers: userResolvers
    }
  ]),
  context: (({ req }) => {
    const org_id = req.headers.org_id || ''

    return { org_id }
  })
})

module.exports = server