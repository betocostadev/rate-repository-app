import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import useSignIn from '../../hooks/useSignIn';
import Text from '../Shared/Text';
import theme from '../../theme';
import FormikTextInput from '../Shared/FormikTextInput';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  formField: {
    marginBottom: 10
  },
  errorView: {
    textTransform: 'uppercase',
    alignSelf: 'center',
    paddingVertical: 10
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
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [signIn] = useSignIn();
  const history = useHistory();

  const errorWarning = e => {
    setError(true);
    if (e.message) {
      setErrorMessage(e.message);
    } else setErrorMessage('Login error');

    setTimeout(() => {
      setError(false);
      setErrorMessage('');
    }, 5000);
  };

  const onSubmit = async values => {
    const { username, password } = values;
    // Handle Sign In
    if (username && username.length && password && password.length) {
      try {
        const login = await signIn({ username, password });

        if (login && login.message) {
          errorWarning(login);
        } else setTimeout(() => { history.push('/'); }, 50);

      } catch (e) {
        errorWarning(e);
        console.log(e);
      }
    }
  };

  return (
    <View>
      { error &&
        <View style={styles.errorView}>
          <Text fontWeight="bold" fontSize="subheading" color="textDanger">Oooops... {errorMessage}</Text>
        </View>
      }
      <Formik initialValues={initialValues} validationSchema={SignInSchema} onSubmit={onSubmit}>
        {
          ({ handleSubmit }) => <FormContainer onSubmit={handleSubmit} />
        }
      </Formik>
    </View>
  );
};

export default SignInForm;
