import React from 'react';
// React-Native router: https://reactrouter.com/native/api/NativeRouter
import { NativeRouter } from 'react-router-native';

import Main from './src/components/Main';

const App = () => {
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
  );
};

export default App;
