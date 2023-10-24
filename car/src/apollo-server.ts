const { ApolloServer } = require("apollo-server");
const { buildSubgraphSchema } = require("@apollo/subgraph");
const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");

export const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
});
