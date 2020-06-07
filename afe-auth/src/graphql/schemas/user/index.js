const { gql } = require("apollo-server");

const userSchema = gql`
  extend type Query {
    users: [User]
    userById(id: Int): User
  }

  extend type Mutation {
    login(input: LoginInput): String
  }

  type User {
    id: ID!
    name: String!
    email: String
  }

  input LoginInput {
    email: String!
    password: String!
  }
`;

module.exports = userSchema;
