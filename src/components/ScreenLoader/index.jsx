import React, { useRef }  from 'react';
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

const SpinAnimation = (props) => {
  const spinValue = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      spinValue,
      {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true
      }
    ).start();
  }, [spinValue])

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '2160deg']
  })

  return (
    <Animated.View
      style={ styles.loader, {transform: [{rotate: spin}] }}
    >
      {props.children}
    </Animated.View>
  );
}


const ScreenLoader = () => {
  return (
    <View style={styles.container}>
      <SpinAnimation>
        <View style={styles.loader} />
      </SpinAnimation>
      <Text style={{ paddingTop: 20}} color="textSecondary" fontsize="title" fontWeight="bold">Loading...</Text>
    </View>
  );
};

export default ScreenLoader;
