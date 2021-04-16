import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';


const styles = StyleSheet.create({
  container: {
    margin: 0,
    paddingVertical: 5,
  },
  input: {
    height: 40,
    marginTop: 6,
    marginHorizontal: 18,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 5,
    paddingLeft: 10
  },
});

const RepositorySearch = props => {
  const [ search, setSearch ] = useState('');

  const handleSearch = value => {
    setSearch(value);
    props.searchFn(value);
  };

  return (
    <View style={styles.container}>
    <TextInput
      style={styles.input}
      onChangeText={handleSearch}
      value={search}
      clearButtonMode="while-editing"
      placeholder="Search here..."
      />
    </View>
  )
}

export default RepositorySearch;
