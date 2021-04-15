import React, { useState } from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import Text from '../Shared/Text';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

const RepositoryFilter = ( props ) => {
  const [selectedFilter, setSelectedFilter] = useState('CREATED_AT,DESC');
  const handleChangeFilter = (value) => {
    setSelectedFilter(value)
    props.pickerFn(value)
    console.log('called inside repository filter.')
    console.log('in repo filter, value is', selectedFilter)
  }


  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedFilter}
        onValueChange={(itemValue, itemIndex) =>
          handleChangeFilter(itemValue)
        }>
        <Picker.Item label="Latest repositories" value="CREATED_AT,DESC" />
        <Picker.Item label="Highest rated repositories" value="RATING_AVERAGE,DESC" />
        <Picker.Item label="Lowest rated repositories" value="RATING_AVERAGE,ASC" />
      </Picker>
    </View>
  );
};

export default RepositoryFilter;

// <TouchableHighlight style={{padding: 10, borderRadius: 10}} activeOpacity={0.6} underlayColor="#eeeeee" onPress={openFilterMenu}>
//   <Text fontWeight="bold" fontSize="subheading">{filter}</Text>
// </TouchableHighlight>
