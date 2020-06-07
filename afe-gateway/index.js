require('dotenv').config()
const jwt = require('jsonwebtoken')
const { ApolloServer, AuthenticationError } = require('apollo-server');
const { ApolloGateway, RemoteGraphQLDataSource } = require('@apollo/gateway');

const port = process.env.PORT || 4000

class AuthenticatedDataSource extends RemoteGraphQLDataSource {
  willSendRequest({ request, context }) {
    request.http.headers.set('org_id', context.org_id);
  }
}

const gateway = new ApolloGateway({
  serviceList: [
    {
      name: 'afe-auth',
      url: 'http://localhost:4001'
    },
    {
      name: 'afe-customers',
      url: 'http://localhost:4002'
    }
  ],
  buildService({ url }) {
    return new AuthenticatedDataSource({ url });
  },
});

const server = new ApolloServer({
  gateway,
  playground: true,
  introspection: true,
  subscriptions: false,
  context: async ({ req }) => {
    const { operationName, query } = req.body

    if (!(operationName === 'IntrospectionQuery') && !query.includes('login')) {
      try {
        const token = req.headers.authorization || '';
        const user = jwt.verify(token, process.env.PRIVATE_KEY)

        return { org_id: user.org_id };
      } catch (error) {
        throw new AuthenticationError('The provided token is invalid')
      }
    }
  }
});

server.listen(port).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});