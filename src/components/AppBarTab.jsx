import React from 'react';
import { Pressable, Alert } from 'react-native';

import Text from './Text';

const PressableText = props => {
  return (
    <Pressable onPress={() => Alert.alert('working')}>
      <Text fontSize="title" fontWeight="bold" color="textWhiteSmoke">{props.name}</Text>
    </Pressable>
  );
};

const AppBarTab = ({name}) => {
  return (
    <PressableText name={name}/>
  );
};

export default AppBarTab;
