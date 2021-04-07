import React from 'react';
import { FlatList } from 'react-native';

export const RepositoryListContainer = ({ repositories, ItemSeparator, renderItem }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default RepositoryListContainer;
