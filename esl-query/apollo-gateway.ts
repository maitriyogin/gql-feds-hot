import { ApolloServer } from "apollo-server";
import { ApolloGateway } from "@apollo/gateway";
import { readFileSync } from "fs";

const supergraphSdl = readFileSync("./supergraph.graphql").toString();
const gateway = new ApolloGateway({
  supergraphSdl,
});
export const server = new ApolloServer({
  gateway,
});
