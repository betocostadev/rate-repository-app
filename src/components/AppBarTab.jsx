import React from 'react';
import { Link } from "react-router-native";

import Text from './Text';

const Navigate = props => {
  return (
    <Link to={ props.name === 'Repositories' ? '/' : '/signin'}>
      <Text fontSize="title" fontWeight="bold" color="textWhiteSmoke">{props.name}</Text>
    </Link>
  );
};

const AppBarTab = ({name}) => {
  return (
    <Navigate name={name}/>
  );
};

export default AppBarTab;
