import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';

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

const initialValues = {
  username: '',
  password: '',
};

const FormikHandler = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {
        ({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />
      }
    </Formik>
  );
};

const SignIn = () => {
  const onSubmit = values => {
    const { username, password } = values;
    console.log('username', username);
    console.log('password', password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.description}>
        <Text fontWeight="bold" style={{ fontSize: 20 }}>Welcome to Rate-Repository-App</Text>
        <Text fontSize="title">Please log in below</Text>
      </View>
      <View>
        <FormikHandler onSubmit={onSubmit} />
      </View>
    </View>
  );
};

export default SignIn;
