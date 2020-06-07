const { gql } = require("apollo-server");

const customerSchema = gql`
  extend type Query {
    customers: [Customer]
    customerById(id: Int): Customer
  }

  type Customer {
    id: ID!
    name: String!
    cnpj: String!
    organization: Organization
  }

  extend type Organization @key(fields: "id") {
    id: ID! @external
    customers: [Customer]
  }
`;

module.exports = customerSchema;
