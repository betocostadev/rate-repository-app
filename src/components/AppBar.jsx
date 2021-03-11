import React from 'react';
import { View, StyleSheet, Pressable, Alert } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';

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

const PressableText = props => {
  return (
    <Pressable onPress={() => Alert.alert('working')}>
      <Text color="textWhiteSmoke">Repositories</Text>
    </Pressable>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemsContainer}>
        <View style={styles.menuItemLeft}>
          <Text fontSize="title" fontWeight="bold" color="textWhiteSmoke">Repositories</Text>
        </View>
        <View style={styles.menuItemRight}>
          <PressableText />
        </View>
      </View>
    </View>
  );
};

export default AppBar;
