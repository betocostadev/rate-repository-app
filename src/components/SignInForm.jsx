import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import theme from '../theme';
import FormikTextInput from './FormikTextInput';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  formField: {
    marginBottom: 10
  }
});

const initialValues = {
  username: '',
  password: '',
};

const SignInSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, 'Username is too short! (5-16)')
    .max(16, 'Username is too long! (5-16)')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Password is too short! (5-16)')
    .max(16, 'Password is too long! (5-16)')
    .required('Required')
});

const FormContainer = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.formField}>
        <FormikTextInput
          name="username"
          placeholder="Your username"
          textContentType="username"
        />
      </View>
      <View style={styles.formField}>
        <FormikTextInput
          name="password"
          placeholder="Your password"
          secureTextEntry
          textContentType="password"
        />
      </View>
      <Button
        title="Sign in"
        color={theme.colors.primary}
        onPress={onSubmit}
        accessibilityLabel="Log in Rate Repository App"
      />
    </View>
  );
};

const SignInForm = () => {
  const onSubmit = values => {
    const { username, password } = values;
    if (username && username.length && password && password.length) {
      // Handle Sign In
      console.log('username', username);
      console.log('password', password);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={SignInSchema} onSubmit={onSubmit}>
      {
        ({ handleSubmit }) => <FormContainer onSubmit={handleSubmit} />
      }
    </Formik>
  );
};

export default SignInForm;
