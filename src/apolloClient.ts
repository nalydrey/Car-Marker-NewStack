import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
    uri: `${import.meta.env.VITE_SERVER_PROTOCOL}://${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_APOLLO_SERVER}`,
    cache: new InMemoryCache(),
  });