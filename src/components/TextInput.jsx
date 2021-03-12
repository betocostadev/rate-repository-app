import React from 'react';
import { TextInput as NativeTextInput } from 'react-native';
import theme from '../theme';

// eslint-disable-next-line no-unused-vars
const TextInput = ({ style, error, ...props }) => {
  // const textInputStyle = [style];

  const textInputStyle = [
    theme.textInput,
    error && theme.textInputError,
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
  // return <NativeTextInput style={ error ? (theme.textInput) : (theme.textInput && theme.textInputError)} {...props} />;
};

export default TextInput;
