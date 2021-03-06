import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useDebounce } from 'use-debounce';

import useRepositories from '../../hooks/useRepositories';

import ListItemSeparator from '../Shared/ListItemSeparator';
import ScreenLoader from '../ScreenLoader';
import RepositoryListContainer from './RepositoryListContainer';
import RepositoryItem from './RepositoryItem';
import RepositorySearch from './RepositorySearch';
import RepositoryFilter from './RepositoryFilter';
import RepositoryNotFound from './RepositoryNotFound';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemText: {
    fontSize: 16,
  },
});

const RepositoryList = () => {
  const [ orderBy, setOrderBy ] = useState('CREATED_AT');
  const [ orderDirection, setOrderDirection ] = useState('DESC');
  const [ searchKeyword, setSearchKeyword ] = useState('');
  const [ debounced ] = useDebounce(searchKeyword, 600);

  const { repositories, fetchMore } = useRepositories({
    first: 6,
    orderBy: orderBy,
    orderDirection: orderDirection,
    searchKeyword: debounced });

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const filterSelector = value => {
    const valArr = value.split(',');
    setOrderBy(valArr[0]);
    setOrderDirection(valArr[1]);
  };

  const search = value => {
    setSearchKeyword(value);
  };

  const onEndReach = () => {
    // console.log('You have reached the end of the list');
    fetchMore();
  };

  const renderItem = ({ item }) => (
    <RepositoryItem
      id={item.id}
      avtImage={item.ownerAvatarUrl}
      fullName={item.fullName}
      description={item.description}
      language={item.language}
      stars={item.stargazersCount}
      forks={item.forksCount}
      reviews={item.reviewCount}
      ratings={item.ratingAverage}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <RepositorySearch searchFn={search} />
      <RepositoryFilter pickerFn={filterSelector} />
      { !repositories && <ScreenLoader />}
      { !repositoryNodes.length && <RepositoryNotFound /> }
      <RepositoryListContainer
        repositories={repositories}
        onEndReach={onEndReach}
        ItemSeparator={ListItemSeparator}
        renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default RepositoryList;

// Reporitories data mock
// const repositories = [
//   {
//     id: 'jaredpalmer.formik',
//     fullName: 'jaredpalmer/formik',
//     description: 'Build forms in React, without the tears',
//     language: 'TypeScript',
//     forksCount: 1589,
//     stargazersCount: 21553,
//     ratingAverage: 88,
//     reviewCount: 4,
//     ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
//   },
//   {
//     id: 'rails.rails',
//     fullName: 'rails/rails',
//     description: 'Ruby on Rails',
//     language: 'Ruby',
//     forksCount: 18349,
//     stargazersCount: 45377,
//     ratingAverage: 100,
//     reviewCount: 2,
//     ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
//   },
//   {
//     id: 'django.django',
//     fullName: 'django/django',
//     description: 'The Web framework for perfectionists with deadlines.',
//     language: 'Python',
//     forksCount: 21015,
//     stargazersCount: 48496,
//     ratingAverage: 73,
//     reviewCount: 5,
//     ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
//   },
//   {
//     id: 'reduxjs.redux',
//     fullName: 'reduxjs/redux',
//     description: 'Predictable state container for JavaScript apps',
//     language: 'TypeScript',
//     forksCount: 13902,
//     stargazersCount: 52869,
//     ratingAverage: 0,
//     reviewCount: 0,
//     ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
//   },
//   {
//     id: 'betocosta.learning',
//     fullName: 'react-native/react',
//     description: 'First React Native App based on FullStackOpen',
//     language: 'JavaScript',
//     forksCount: 10,
//     stargazersCount: 1600,
//     ratingAverage: 0,
//     reviewCount: 0,
//     ownerAvatarUrl: 'https://avatars.githubusercontent.com/u/9079952?s=460&u=5aa301ac2fa602cdf2321a5b423fbdb711a9fb7f&v=4',
//   },
// ];
