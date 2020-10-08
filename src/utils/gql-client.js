import { ApolloClient, InMemoryCache } from '@apollo/client';

const gqlClient = new ApolloClient({
  uri: process.env.GQL_URL,
  cache: new InMemoryCache()
});

export default gqlClient;