import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Route, Switch, Redirect, useParams } from 'react-router-native';

import AppBar from './AppBar/index';
import RepositoryList from './RepositoryList';
import RepositoryItem from './RepositoryList/RepositoryItem';
import SignIn from './SignIn';
import ScreenLoader from '../components/ScreenLoader';

import useRepository from '../hooks/useRepository';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8',
  }
});

const Repository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);

  if (!repository) return <ScreenLoader />

  return (
    <View>
      <Text>Found a repository, the ID is: {repository.id}</Text>
    </View>
  )

}

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/:id">
          <Repository />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;

    // <View style={styles.header}>
    //   <Text style={styles.title} fontSize="title" color="textWhiteSmoke">Rate Repository Application</Text>
    // </View>
