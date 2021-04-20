import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import Text from '../Shared/Text';

const styles = StyleSheet.create({
  menuItem: {
    marginLeft: 6,
    padding: 5,
  },
});

const Navigate = props => {
  const switchPage = () => {
    switch (props.name) {
      case 'Sign in':
        return '/signin';
      case 'Sign up':
        return '/signup';
      case 'Create a review':
        return '/createreview';
      case 'My reviews':
        return '/myreviews';
      default:
        return '/';
    }
  };

  return (
    <Link to={ switchPage(props.name) }>
      <Text fontSize="title" fontWeight="bold" color="textWhiteSmoke">{props.name}</Text>
    </Link>
  );
};

const AppBarTab = ({name}) => {
  return (
    <View style={styles.menuItem}>
      <Navigate name={name}/>
    </View>
  );
};

export default AppBarTab;
