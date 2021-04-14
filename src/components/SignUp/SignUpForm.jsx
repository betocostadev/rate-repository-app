import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import useSignUp from '../../hooks/useSignUp';
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
  confirmPassword: ''
};

const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(1, 'Username is too short! (1-30)')
    .max(30, 'Username is too long! (1-30)')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Password is too short! (5-50)')
    .max(50, 'Password is too long! (5-50)')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null])
    .required('Password confirmation is required')
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
      <View style={styles.formField}>
        <FormikTextInput
          name="confirmPassword"
          placeholder="Confirm your password"
          secureTextEntry
          textContentType="password"
        />
      </View>
      <Button
        title="Sign up"
        color={theme.colors.primary}
        onPress={onSubmit}
        accessibilityLabel="Create your account to Rate Repository App"
      />
    </View>
  );
};

const SignUpForm = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [signUp] = useSignUp();
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
    try {
      const newUser = await signUp({ username, password });

      if (newUser && newUser.data) {
        try {
          const login = await signIn({ username, password });

          if (login && login.message) {
            errorWarning(login);
          } else setTimeout(() => { history.push('/'); }, 0);

        } catch (e) {
          errorWarning(e);
          console.log(e);
        }
      }

    } catch (e) {
      errorWarning(e);
      console.log(e);
    }
  };

  return (
    <View>
      { error &&
        <View style={styles.errorView}>
          <Text fontWeight="bold" fontSize="subheading" color="textDanger">Oooops... {errorMessage}</Text>
        </View>
      }
      <Formik initialValues={initialValues} validationSchema={SignUpSchema} onSubmit={onSubmit}>
        {
          ({ handleSubmit }) => <FormContainer onSubmit={handleSubmit} />
        }
      </Formik>
    </View>
  );
};

export default SignUpForm;
