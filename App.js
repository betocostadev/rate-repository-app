import React from 'react';
// React-Native router: https://reactrouter.com/native/api/NativeRouter
import { NativeRouter } from 'react-router-native';
// Adding Apollo Provider
import { ApolloProvider } from '@apollo/client';

// React native doesn't have a .Env, the solution are Expo Constants
// https://fullstackopen.com/en/part10/communicating_with_server#environment-variables
// https://docs.expo.io/guides/environment-variables/#using-app-manifest-extra
// import Constants from 'expo-constants';

import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';

const apolloClient = createApolloClient();

const App = () => {
  // console.log(Constants.manifest);
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;
