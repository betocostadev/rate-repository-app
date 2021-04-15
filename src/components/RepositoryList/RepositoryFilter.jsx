import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    padding: 5,
  },
});

const RepositoryFilter = props => {
  const [selectedFilter, setSelectedFilter] = useState('CREATED_AT,DESC');

  const handleChangeFilter = value => {
    setSelectedFilter(value);
    props.pickerFn(value);
  };

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
