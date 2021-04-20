import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { format, parseISO } from 'date-fns';

import useUserReviews from '../../hooks/useUserReviews';

import ListItemSeparator from '../Shared/ListItemSeparator';
import Text from '../Shared/Text';
import theme from '../../theme';

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
    paddingTop: 4,
    paddingRight: 4,
    paddingBottom: 2
  }
});

const Review = ({ review }) => {
  return (
    <View style={styles.reviewItem}>
      <View style={styles.reviewAside}>
        <Text style={styles.ratingCircle} fontWeight="bold">{review.rating}</Text>
      </View>
      <View style={styles.reviewMain}>
        <Text fontSize="subheading" fontWeight="bold" style={styles.reviewText}>{review.repositoryId}</Text>
        <Text color="textSecondary" fontSize="subheading">{format(parseISO(review.createdAt), 'MM.dd.yyyy')}</Text>
        <Text style={styles.reviewText}>{review.text}</Text>
      </View>
    </View>
  );
};

const MyReviews = () => {
  const { userReviews, fetchMore } = useUserReviews({ first: 10 });

  const reviewNodes = userReviews
    ? userReviews.edges.map((edge) => edge.node)
    : [];

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ListItemSeparator}
      renderItem={({ item }) => <Review review={item} />}
      keyExtractor={({ id }) => id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.3}
    />
  );
};

export default MyReviews;
