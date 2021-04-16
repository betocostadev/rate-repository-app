import Constants from 'expo-constants';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// Adding field policy
import { relayStylePagination } from '@apollo/client/utilities';

const httpLink = createHttpLink({
  // Replace the IP address part with your own IP address! - Launch Expo and get the IP
  uri: Constants.manifest.extra.apollo_uri
});

// Old without using the storage
// const createApolloClient = () => {
//   return new ApolloClient({
//     link: httpLink,
//     cache: new InMemoryCache(),
//   });
// };

// In memory cache to be used with relayStylePagination
// https://www.apollographql.com/docs/react/caching/cache-field-behavior/
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        repositories: relayStylePagination(),
      }
    }
  }
});

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
      };
    }
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache
  });
};

export default createApolloClient;
