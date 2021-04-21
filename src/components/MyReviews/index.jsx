import React from 'react';
import { FlatList, StyleSheet, View, Button, Alert } from 'react-native';
import { useHistory } from 'react-router-native';
import { format, parseISO } from 'date-fns';

import useUserReviews from '../../hooks/useUserReviews';
import useDeleteReview from '../../hooks/useDeleteReview';

import ListItemSeparator from '../Shared/ListItemSeparator';
import Text from '../Shared/Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  reviewContainer: {
    paddingBottom: 5
  },
  reviewMain: {
    flex: 0.85,
    paddingRight: 5
  },
  reviewAside: {
    flex: 0.15,
    paddingLeft: 5,
    paddingTop: 5,
    alignItems: 'center'
  },
  reviewFooter: {
    backgroundColor: 'white',
    paddingBottom: 10,
    paddingHorizontal: 10
  },
  btnContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  },
  reviewItem: {
    backgroundColor: 'white',
    paddingVertical: 10,
    flexDirection: 'row'
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

const Review = ({ review, refetch }) => {
  const history = useHistory();
  const [ deleteReview ] = useDeleteReview();

  const viewRepository = () => {
    history.push(review.repositoryId)
  }
  const confirmDelete = async id => {
    try {
      const review = await deleteReview({ id });
      if (review) refetch();

    } catch (e) {
      console.log(e);
    }
  }
  const deleteReviewDialog = id => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "OK", onPress: () => confirmDelete(id) }
      ]
    );
  }
  return (
    <View style={styles.reviewContainer}>
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
      <View style={styles.reviewFooter}>
        <View style={styles.btnContainer}>
          <Button
            title="View repository"
            color={theme.colors.primary}
            onPress={viewRepository}
            accessibilityLabel="View repository"
          />
          <Button
            title="Delete review"
            color={theme.colors.danger}
            onPress={() => deleteReviewDialog(review.id)}
            accessibilityLabel="Delete review"
          />
        </View>
      </View>
    </View>
  );
};

const MyReviews = () => {
  const { userReviews, fetchMore, refetch } = useUserReviews({ first: 10 });

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
      renderItem={({ item }) => <Review review={item} refetch={refetch} />}
      keyExtractor={({ id }) => id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.3}
    />
  );
};

export default MyReviews;
