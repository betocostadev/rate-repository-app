import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from '../Shared/Text';
import ReviewForm from './ReviewForm';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexGrow: 1,
    flexShrink: 1,
    padding: 20,
  },
  description: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const CreateReview = () => {
  return (
    <View style={styles.container}>
      <View style={styles.description}>
        <Text fontWeight="bold" fontSize="title">Add your review to a repository</Text>
      </View>
      <View>
        <ReviewForm />
      </View>
    </View>
  );
};

export default CreateReview;
