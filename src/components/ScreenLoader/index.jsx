import React, { useRef }  from 'react';
import { View, Animated } from 'react-native';
import Text from '../Shared/Text';
import theme from '../../theme'

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
      style={{transform: [{rotate: spin}] }}
    >
      {props.children}
    </Animated.View>
  );
}


const ScreenLoader = () => {
  return (
    <View style={theme.spinLoader.container}>
      <SpinAnimation>
        <View style={theme.spinLoader.loader} />
      </SpinAnimation>
      <Text style={{ paddingTop: 20}} color="textSecondary" fontsize="title" fontWeight="bold">Loading...</Text>
    </View>
  );
};

export default ScreenLoader;
