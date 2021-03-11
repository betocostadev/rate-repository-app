import React from 'react';
// import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';

// import Text from './Text';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8'
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;

    // <View style={styles.header}>
    //   <Text style={styles.title} fontSize="title" color="textWhiteSmoke">Rate Repository Application</Text>
    // </View>
