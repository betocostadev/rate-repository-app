import React from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import { render } from '@testing-library/react-native';

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const renderItem = ({ item }) => (
    <View>
      <View>
        <View>
          <Image source={{ uri: item.ownerAvatarUrl}} />
        </View>
        <View>
          <Text testID="fullName">{item.fullName}</Text>
          <Text testID="description">{item.description}</Text>
          <View>
            <Text testID="language">{item.language}</Text>
          </View>
        </View>
      </View>
      <View>
        <View>
          <Text testID="stars">{item.stargazersCount}</Text>
          <Text>Stars</Text>
        </View>
        <View>
          <Text testID="forks">{item.forksCount}</Text>
          <Text>Forks</Text>
        </View>
        <View>
          <Text testID="reviews">{item.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View>
          <Text testID="ratings">{item.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );

  const ItemSeparator = () => <View style={{ height: 10 }} />;

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      // Add your test code here
      const { debug, getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);

      const repoFullName = getAllByTestId('fullName');
      const repoDescription = getAllByTestId('description');
      const repoLanguage = getAllByTestId('language');
      const repoStars = getAllByTestId('stars');
      const repoForks = getAllByTestId('forks');
      const repoReviews = getAllByTestId('reviews');
      const repoRatings = getAllByTestId('ratings');

      // debug();

      expect(repoFullName[0]).toHaveTextContent('jaredpalmer/formik');
      expect(repoFullName[1]).toHaveTextContent('async-library/react-async');

      expect(repoDescription[0]).toHaveTextContent('Build forms in React, without the tears');
      expect(repoDescription[1]).toHaveTextContent('Flexible promise-based React data loader');

      expect(repoLanguage[0]).toHaveTextContent('TypeScript');
      expect(repoLanguage[1]).toHaveTextContent('JavaScript');

      expect(repoStars[0]).toHaveTextContent('21856');
      expect(repoStars[1]).toHaveTextContent('1760');

      expect(repoForks[0]).toHaveTextContent('1619');
      expect(repoForks[1]).toHaveTextContent('69');

      expect(repoReviews[0]).toHaveTextContent('3');
      expect(repoReviews[1]).toHaveTextContent('3');

      expect(repoRatings[0]).toHaveTextContent('88');
      expect(repoRatings[1]).toHaveTextContent('72');

    });
  });
});


