import React from 'react';
import { TextInput as NativeTextInput } from 'react-native';
import theme from '../theme';

// eslint-disable-next-line no-unused-vars
const TextInput = ({ style, error, ...props }) => {
  // const textInputStyle = [style];

  return <NativeTextInput style={theme.textInput} {...props} />;
};

export default TextInput;
