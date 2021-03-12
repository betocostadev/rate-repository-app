import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from './Text';
import SignInForm from './SignInForm';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexGrow: 1,
    flexShrink: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
  },
  description: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const SignIn = () => {
  return (
    <View style={styles.container}>
      <View style={styles.description}>
        <Text fontWeight="bold" style={{ fontSize: 20 }}>Welcome to Rate-Repository-App</Text>
        <Text fontSize="title">Please log in below</Text>
      </View>
      <View>
        <SignInForm />
      </View>
    </View>
  );
};

export default SignIn;
