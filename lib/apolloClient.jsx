import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
// import { setContext } from '@apollo/client/link/context';

const api = import.meta.env.VITE_API_HYGRAPH;
// const token = import.meta.env.VITE_API_TOKEN;

// const authLink = setContext((_, { headers }) => {
//   return { headers: { ...headers, authorization: token ? `Bearer ${token}` : '' } };
// });

const httpLink = createHttpLink({ uri: api });
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});
