import React from 'react';
import { StyleSheet, View } from 'react-native';

import Text from '../Shared/Text';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
});

const RepositorySearch = () => {
  return (
    <View style={styles.container}>
      <Text>Search will be here</Text>
    </View>
  )
}

export default RepositorySearch;
