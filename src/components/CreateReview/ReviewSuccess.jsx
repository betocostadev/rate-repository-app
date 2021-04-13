import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from '../Shared/Text';

const styles = StyleSheet.create({
  description: {
    marginTop: 20,
    justifyContent: 'center',
  }
});

const ReviewSuccess = () => {
  return (
    <View style={styles.description}>
      <Text fontSize="subheading">Your review succesfully was successfully added.</Text>
      <Text fontSize="subheading">You will be redirected to the repository.</Text>
    </View>
  );
};

export default ReviewSuccess;
