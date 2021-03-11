import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
  },
  itemsContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    paddingTop: 10
  },
  menuItemLeft: {
    flexGrow: 0.7,
    paddingLeft: 10,
    alignSelf: 'center'
  },
  menuItemRight: {
    flexGrow: 0.3,
    alignSelf: 'center'
  }
});



const AppBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemsContainer}>
        <View style={styles.menuItemLeft}>
          <AppBarTab name={'Repositories'} />
        </View>
        <View style={styles.menuItemRight}>
        </View>
      </View>
    </View>
  );
};

export default AppBar;
