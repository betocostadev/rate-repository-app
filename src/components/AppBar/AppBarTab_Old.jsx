import React from 'react';
import { Pressable, Alert } from 'react-native';
import { Link } from "react-router-native";

import Text from '../Shared/Text';

const PressableText = props => {
  let page = '';
  console.log('pressable');
  console.log(props.name);

  switch (props.name) {
    case 'Repositories':
      page = '/';
      break;
    case 'Sign In':
      page = '/signin';
      break;
    default:
      page = '/';
      break;
  }

  return (
    <Pressable onPress={() => Alert.alert('working')}>
      <Link to="/signing">
        <Text fontSize="title" fontWeight="bold" color="textWhiteSmoke">{props.name}</Text>
      </Link>
    </Pressable>
  );
};

const AppBarTab = ({name}) => {
  return (
    <PressableText name={name}/>
  );
};

export default AppBarTab;
