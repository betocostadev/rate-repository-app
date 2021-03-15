import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    height: 75,
  },
  itemsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  menuItem: {
    marginLeft: 10,
    padding: 5,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemsContainer}>
        <ScrollView horizontal>
          <View style={styles.menuItem}>
            <AppBarTab name={'Repositories'} />
          </View>
          <View style={styles.menuItem}>
            <AppBarTab name={'Sign in'} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AppBar;
