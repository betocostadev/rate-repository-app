import React from 'react';
import { Link } from 'react-router-native';

import Text from '../Shared/Text';

const Navigate = props => {
  const switchPage = () => {
    switch (props.name) {
      case 'Sign in':
        return '/signin'
      case 'Create Review':
        return '/createreview'
      default:
        return '/'
    }
  }
  return (
    <Link to={ switchPage(props.name)}>
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
