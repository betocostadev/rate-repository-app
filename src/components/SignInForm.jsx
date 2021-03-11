import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

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

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.formField}>
        <FormikTextInput
          name='username'
          placeholder='Your username'
        />
      </View>
      <View style={styles.formField}>
        <FormikTextInput
          name='password'
          placeholder='Your password'
          secureTextEntry
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

export default SignInForm;
