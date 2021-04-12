import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect, useParams } from 'react-router-native';

import AppBar from './AppBar/index';
import ScreenLoader from '../components/ScreenLoader';
import SignIn from './SignIn';
import RepositoryList from './RepositoryList';
import SingleRepository from './SingleRepository/SingleRepository';
import CreateReview from './CreateReview';

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
    <SingleRepository repository={repository} />
  )

}

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/createreview" exact>
          <CreateReview />
        </Route>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/:id" exact>
          <Repository />
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
