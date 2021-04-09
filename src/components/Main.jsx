import React from 'react';
import { StyleSheet, View } from 'react-native';
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
    <RepositoryItem
      singleItem={true}
      id={repository.id}
      avtImage={repository.ownerAvatarUrl}
      fullName={repository.fullName}
      description={repository.description}
      language={repository.language}
      stars={repository.stargazersCount}
      forks={repository.forksCount}
      reviews={repository.reviewCount}
      ratings={repository.ratingAverage}
    />
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
