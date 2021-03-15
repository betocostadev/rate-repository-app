import React from 'react';
// React-Native router: https://reactrouter.com/native/api/NativeRouter
import { NativeRouter } from 'react-router-native';
// Adding Apollo Provider
import { ApolloProvider } from '@apollo/client';

import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';

const apolloClient = createApolloClient();

const App = () => {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;
