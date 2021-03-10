import React from 'react';
import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#cccccc'
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'black'
  },
  title: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 18,
    color: 'whitesmoke'
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Rate Repository Application</Text>
      </View>
      <RepositoryList />
    </View>
  );
};

export default Main;
