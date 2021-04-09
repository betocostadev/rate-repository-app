import React, { useRef, useEffect }  from 'react';
import { StyleSheet, View, Dimensions, Animated } from 'react-native';
import Text from '../Shared/Text';


const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loader: {
    borderStyle: 'solid',
    borderWidth: 16,
    borderColor: '#f3f3f3',
    borderRadius: 100,
    borderTopWidth: 16,
    borderTopColor: '#3498db',
    width: 120,
    height: 120,
    transform: [{ rotate: '45deg'}]
  }
});

// const SpinView = (props) => {
//   const spinAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

//   React.useEffect(() => {
//     Animated.timing(
//       spinAnim,
//       {
//         toValue: '360deg',
//         duration: 5000,
//         useNativeDriver: true
//       }
//     ).start();
//   }, [spinAnim])

//   return (
//     <Animated.View                 // Special animatable View
//     style={{
//       opacity: 1,
//       transform: [
//         { rotate: "360deg" },
//         { perspective: 1000 } // without this line this Animation will not render on Android while working fine on iOS
//       ]
//     }}
//     >
//       {props.children}
//     </Animated.View>
//   );
// }


const ScreenLoader = () => {
  return (
    <View style={styles.container}>
        <Text color="textSecondary" fontsize="title" fontWeight="bold">Loading</Text>
    </View>
  );
};

export default ScreenLoader;
