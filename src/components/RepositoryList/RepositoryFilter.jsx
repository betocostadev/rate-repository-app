import React, { useState } from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';

import Text from '../Shared/Text';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

const RepositoryFilter = () => {
  const [filter, setFilter] = useState('Latest repositories');

  const openFilterMenu = () => {
    console.log('menu open')
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight style={{padding: 10, borderRadius: 10}} activeOpacity={0.6} underlayColor="#eeeeee" onPress={openFilterMenu}>
        <Text fontWeight="bold" fontSize="subheading">{filter}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default RepositoryFilter;
