import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  text: {
    color: Platform.OS === 'android' ? 'green' : 'blue',
  },
});

// const styles = StyleSheet.create({
//   text: {
//     color: Platform.select({
//       android: 'green',
//       ios: 'blue',
//       default: 'black',
//     }),
//   },
// });

const WhatIsMyPlatform = () => {
  // console.log(Platform);
  // console.log(Platform.OS);
  return (
    <View>
      <Text fontSize="title" fontWeight="bold" style={styles.text}>Your Platform is: {Platform.OS}</Text>
    </View>
  );
};

export default WhatIsMyPlatform;

// Even select a component based on platform:

// const MyComponent = Platform.select({
//   ios: () => require('./MyIOSComponent'),
//   android: () => require('./MyAndroidComponent'),
// })();

// <MyComponent />;
