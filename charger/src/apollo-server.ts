const { ApolloServer } = require('apollo-server');
const { buildSubgraphSchema } = require('@apollo/subgraph')
const { typeDefs } = require('./schema')
const { resolvers } = require('./resolvers')
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
export const server = new ApolloServer({ schema: buildSubgraphSchema({ typeDefs, resolvers }) });
