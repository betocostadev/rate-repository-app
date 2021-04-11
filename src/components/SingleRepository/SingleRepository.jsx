import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { format, parseISO } from 'date-fns'

import useReviews from '../../hooks/useReviews';

import ListItemSeparator from '../Shared/ListItemSeparator';
import Text from '../Shared/Text';
import RepositoryItem from '../RepositoryList/RepositoryItem';
import theme from '../../theme'

const styles = StyleSheet.create({
  reviewItem: {
    backgroundColor: 'white',
    paddingVertical: 10,
    flexDirection: 'row'
  },
  reviewAside: {
    flex: 0.15,
    paddingLeft: 5,
    paddingTop: 5,
    alignItems: 'center'
  },
  reviewMain: {
    flex: 0.85,
    paddingRight: 5
  },
  ratingCircle: {
    textAlign: 'center',
    padding: 8,
    paddingTop: 10,
    width: 40,
    height: 40,
    color: theme.colors.primary,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: 20,
    justifyContent: 'center'
  },
  reviewText: {
    padding: 2
  }
});

const RepositoryInfo = ({ repository }) => {
  // Repository's information implemented in the previous exercise
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
      url={repository.url}
    />
  )
};

const ReviewItem = ({ review }) => {
  // Single review item

  return (
    <View style={styles.reviewItem}>
      <View style={styles.reviewAside}>
        <Text style={styles.ratingCircle} fontWeight="bold">{review.rating}</Text>
      </View>
      <View style={styles.reviewMain}>
        <Text fontWeight="bold" fontSize="subheading">{review.user.username}</Text>
        <Text color="textSecondary" fontSize="subheading">{format(parseISO(review.createdAt), 'MM.dd.yyyy')}</Text>
        <Text style={styles.reviewText}>{review.text}</Text>
      </View>
    </View>
  )
};

const SingleRepository = ({ repository }) => {
  // ...
  const { reviews } = useReviews(repository.id)

  const reviewNodes = reviews
    ? reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ListItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
    />
  );
};

export default SingleRepository;
