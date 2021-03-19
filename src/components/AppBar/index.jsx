import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useHistory } from 'react-router-native';
import Constants from 'expo-constants';
import { useApolloClient ,useQuery } from '@apollo/client';
import { AUTHORIZED_USER } from '../../graphql/queries';
import AuthStorageContext from '../../contexts/AuthStorageContext';

import Text from '../Shared/Text';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    height: 75,
  },
  itemsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  menuItem: {
    marginLeft: 10,
    padding: 5,
  },
});

const AppBar = () => {
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);
  const { data } = useQuery(AUTHORIZED_USER);
  const history = useHistory();

  const authorizedUser = data ? data.authorizedUser : undefined;
  console.log(authorizedUser);

  const onSignOut = async () => {
    const accessToken = await authStorage.getAccessToken();
    console.log(accessToken);
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    setTimeout(() => { history.push('/'); }, 0);
  };


  return (
    <View style={styles.container}>
      <View style={styles.itemsContainer}>
        <ScrollView horizontal>
          <View style={styles.menuItem}>
            <AppBarTab name={'Repositories'} />
          </View>
          {
            !authorizedUser
            ? (
                <View style={styles.menuItem}>
                  <AppBarTab name={'Sign in'} />
                </View>
              )
            : (
                <View style={styles.menuItem}>
                  <Text fontSize="title" fontWeight="bold" color="textWhiteSmoke"
                    onPress={ onSignOut }>Sign Out</Text>
                </View>
              )
          }
        </ScrollView>
      </View>
    </View>
  );
};

export default AppBar;
