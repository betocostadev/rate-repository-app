import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from '../Shared/Text';

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

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.description}>
        <Text fontWeight="bold" style={{ fontSize: 20 }}>Welcome to Rate-Repository-App</Text>
        <Text fontSize="title">Create your account below</Text>
      </View>
    </View>
  );
};

export default SignUp;
