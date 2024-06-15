import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Query {
        getAllUsers: [User!]!,
        getASpecificUser(id: ID!): User
    }

    type User {
        id: ID!
        name: String!
        age: Int!
    }

    type Mutation {
        createUser( name: String!, age: Int! ): User!
        updateASpecificUserAge(id: ID!, age: Int!): User!
    }

`;

export default typeDefs;