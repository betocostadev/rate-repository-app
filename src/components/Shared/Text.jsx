import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorTextWhiteSmoke: {
    color: theme.colors.textWhiteSmoke,
  },
  colorTextWhite: {
    color: theme.colors.textWhite,
  },
  colorTextDanger: {
    color: theme.colors.textDanger,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeTitle: {
    fontSize: theme.fontSizes.title
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'textWhiteSmoke' && styles.colorTextWhiteSmoke,
    color === 'textWhite' && styles.colorTextWhite,
    color === 'textDanger' && styles.colorTextDanger,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontSize === 'title' && styles.fontSizeTitle,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
