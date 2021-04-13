import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

import { useHistory } from 'react-router-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

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
  formFieldReview: {
    marginBottom: 10,
    textAlignVertical: 'top'
  },
  errorView: {
    textTransform: 'uppercase',
    alignSelf: 'center',
    paddingVertical: 10
  }
});

const initialValues = {
  owner: '',
  repository: '',
  rating: '',
  review: ''
};

const SignInSchema = Yup.object().shape({
  owner: Yup.string()
    .min(2, 'Owner name is too short! (min 2)')
    .required('Repository owner name is required'),
  repository: Yup.string()
    .min(2, 'Repository name is too short! (min 2)')
    .required('Repository name is required'),
  rating: Yup.number()
    .positive()
    .integer()
    .min(0, 'Min rating is 0!')
    .max(100, 'Max rating is 100!')
    .required('Rating is required'),
  review: Yup.string()
});

const FormContainer = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.formField}>
        <FormikTextInput
          name="owner"
          placeholder="Repository owner name"
          textContentType="none"
        />
      </View>
      <View style={styles.formField}>
        <FormikTextInput
          name="repository"
          placeholder="Repository name"
          textContentType="none"
        />
      </View>
      <View style={styles.formField}>
        <FormikTextInput
          name="rating"
          placeholder="Rating between 0 and 100"
          textContentType="none"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.formFieldReview}>
        <FormikTextInput
          name="review"
          multiline
          placeholder="Write your review"
          textContentType="none"
        />
      </View>
      <Button
        title="Create a review"
        color={theme.colors.primary}
        onPress={onSubmit}
        accessibilityLabel="Create a review"
      />
    </View>
  );
};

const ReviewForm = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  // const [signIn] = useSignIn();
  // const history = useHistory();

  const errorWarning = e => {
    setError(true);
    if (e.message) {
      setErrorMessage(e.message);
    } else setErrorMessage('Error adding review');

    setTimeout(() => {
      setError(false);
      setErrorMessage('');
    }, 5000);
  };

  const onSubmit = async values => {
    const { owner, repository, rating, review } = values;
    // Handle Sign In

    console.log(values)
    // if (username && username.length && password && password.length) {
    //   try {
    //     const login = await signIn({ username, password });

    //     if (login && login.message) {
    //       errorWarning(login);
    //     } else setTimeout(() => { history.push('/'); }, 0);

    //   } catch (e) {
    //     errorWarning(e);
    //     console.log(e);
    //   }
    // }
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

export default ReviewForm;
