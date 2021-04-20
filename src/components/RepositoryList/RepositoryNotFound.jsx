import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Shared/Text';

const RepositoryNotFound = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 12,
      alignContent: 'center',
      justifyContent: 'center'
    },
    itemText: {
      alignSelf: 'center'
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.itemText} color="textSecondary" fontSize="title" fontWeight="bold">Your search term returned no results.</Text>
    </View>
  );
};

export default RepositoryNotFound;
