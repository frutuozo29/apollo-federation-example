const { gql } = require("apollo-server");

const organizationSchema = gql`
  extend type Query {
    organizations: [Organization]
    organizationById(id: Int): Organization
  }

  type Organization @key(fields: "id") {
    id: ID!
    name: String!
    cnpj: String
  }
`;

module.exports = organizationSchema;
