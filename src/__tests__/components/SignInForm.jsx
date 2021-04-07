import React from 'react';
import { View, Button } from 'react-native';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Formik } from 'formik';
import FormikTextInput from '../../components/Shared/FormikTextInput';
import * as Yup from 'yup';

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
    <View>
      <View>
        <FormikTextInput
          testID="usernameField"
          name="username"
          placeholder="Your username"
          textContentType="username"
        />
      </View>
      <View>
        <FormikTextInput
          testID="passwordField"
          name="password"
          placeholder="Your password"
          secureTextEntry
          textContentType="password"
        />
      </View>
      <Button
        testID="submitButton"
        title="Sign in"
        onPress={onSubmit}
        accessibilityLabel="Log in Rate Repository App"
      />
    </View>
  );
};

const SignInForm = ({ onSubmit }) => {

  return (
    <View>
      <Formik initialValues={initialValues} validationSchema={SignInSchema} onSubmit={onSubmit}>
        {
          ({ handleSubmit }) => <FormContainer onSubmit={handleSubmit} />
        }
      </Formik>
    </View>
  );
};


describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();
      const { debug, getByTestId } = render(<SignInForm onSubmit={onSubmit} />);

      // debug();

      fireEvent.changeText(getByTestId('usernameField'), 'kalle');
      fireEvent.changeText(getByTestId('passwordField'), 'password');
      fireEvent.press(getByTestId('submitButton'));

      // await act(async () => {
      //   // call the fireEvent method here
      // });

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'kalle',
          password: 'password',
        });
      });

    });
  });
});
