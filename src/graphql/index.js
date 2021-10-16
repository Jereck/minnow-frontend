import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";


// will need to store uri's in envs for different clients 
const httpLinkNest = new HttpLink({
  uri: "http://localhost:3000/graphql"
});

const httpLinkKeyStone = new HttpLink({
  uri: "http://localhost:5000/api/graphql"
});


const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

// If you provide a link chain to ApolloClient, you
// don't provide the `uri` option.
const clientNest = new ApolloClient({
  // The `from` function combines an array of individual links
  // into a link chain
  link: from([errorLink, httpLinkNest]),
  cache: new InMemoryCache()
});

// If you provide a link chain to ApolloClient, you
// don't provide the `uri` option.
const clientKeyStone = new ApolloClient({
  // The `from` function combines an array of individual links
  // into a link chain
  link: from([errorLink, httpLinkKeyStone]),
  cache: new InMemoryCache()
});

export  {
  clientNest,
  clientKeyStone
}