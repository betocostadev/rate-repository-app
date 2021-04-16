import React from 'react';
import { FlatList } from 'react-native';

export const RepositoryListContainer = ({ repositories, onEndReach, ItemSeparator, renderItem }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositoryListContainer;

// GraphQL cursor-based pagination
// onEndReached={onEndReach}
// onEndReachedThreshold={0.5}
