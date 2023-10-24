import { NextPage } from "next";

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
// @ts-ignore This path is generated at build time and conflicts otherwise
import { NextApiRequestCookies } from "next-server/server/api-utils";
import { IncomingMessage } from "http";
import { onError } from "@apollo/client/link/error";

const urls = {
  local: "http://localhost:30115",
  localCluster: "http://esl-query-srv:4003",
  remote: "swfed.dev/graphql",
};

export type ApolloClientContext = {
  req?: IncomingMessage & {
    cookies: NextApiRequestCookies;
  };
};

export const withApollo = (Comp: NextPage) => (props: any) => {
  return (
    <ApolloProvider client={getApolloClient(undefined, props.apolloState)}>
      <Comp />
    </ApolloProvider>
  );
};

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      // eslint-disable-next-line no-console
      console.log(`[GraphQL error]: Message: ${message}`, {
        Location: locations,
        Path: path,
      })
    );
  }
  // eslint-disable-next-line no-console
  if (networkError)
    console.log(`[Network error]: ${networkError}`, { networkError });
});
export const getApolloClient = (
  ctx?: ApolloClientContext,
  initialState?: NormalizedCacheObject
) => {
  if (ctx && ctx.req) {
    let { req } = ctx;
    // Do something with the cookies here, maybe add a header for authentication
    req.cookies;
  }

  const httpLink = createHttpLink({
    uri: urls.localCluster,
    fetch,
  });
  const cache = new InMemoryCache().restore(initialState || {});
  return new ApolloClient({
    link: ApolloLink.from([errorLink, httpLink]),
    cache,
  });
};
