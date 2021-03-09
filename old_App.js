import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Alert} from 'react-native';

const HelloWorld = props => {
  return <Text>{props.message}</Text>;
};

const TouchableText = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => Alert.alert('You pressed the text!')}
    >
      <Text>You can press me</Text>
    </TouchableWithoutFeedback>
  );
};

export default function App() {
  console.log('Running the app - console logging');
  return (
    <View style={styles.container}>
      <HelloWorld message={'Doing something'} />
      <Text>Starting my first React-Native App!</Text>
      <TouchableText />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
