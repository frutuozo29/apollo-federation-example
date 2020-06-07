const { ApolloServer } = require('apollo-server')
const { buildFederatedSchema } = require('@apollo/federation')

// schemas e resolvers
const customerSchema = require('../graphql/schemas/customer')
const customerResolvers = require('../graphql/resolvers/customer')

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs: customerSchema,
      resolvers: customerResolvers
    }
  ]),
  context: (({ req }) => {
    const org_id = req.headers.org_id || ''

    return { org_id }
  })
})

module.exports = server