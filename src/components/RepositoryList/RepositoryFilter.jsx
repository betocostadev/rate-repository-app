import React, { useState } from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import Text from '../Shared/Text';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

const RepositoryFilter = () => {
  const [filter, setFilter] = useState('Latest repositories');
  const [selectedFilter, setSelectedFilter] = useState();


  return (
    <View style={styles.container}>
    <Text>Select an item...</Text>
      <Picker
        selectedValue={selectedFilter}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedFilter(itemValue)
        }>
        <Picker.Item label="Latest repositories" value="CREATED AT" />
        <Picker.Item label="Highest rated repositories" value="ASC" />
        <Picker.Item label="Lowest rated repositories" value="DES" />
      </Picker>
    </View>
  );
};

export default RepositoryFilter;

// <TouchableHighlight style={{padding: 10, borderRadius: 10}} activeOpacity={0.6} underlayColor="#eeeeee" onPress={openFilterMenu}>
//   <Text fontWeight="bold" fontSize="subheading">{filter}</Text>
// </TouchableHighlight>
