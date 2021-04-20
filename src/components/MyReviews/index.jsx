import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { format, parseISO } from 'date-fns';

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
        <Text fontSize="subheading" fontWeight="bold" style={styles.reviewText}>{review.fullName}</Text>
        <Text color="textSecondary" fontSize="subheading">{format(parseISO(review.createdAt), 'MM.dd.yyyy')}</Text>
        <Text style={styles.reviewText}>{review.text}</Text>
      </View>
    </View>
  );
};

const MyReviews = ({ repository }) => {
  // const { reviews, fetchMore } = useReviews({ id: repository.id, first: 6});

  // const reviewNodes = reviews
  //   ? reviews.edges.map((edge) => edge.node)
  //   : [];

  // const onEndReach = () => {
  //   fetchMore();
  // };

  const myReviews = [
    {
      "id": "753f3e99-e73a-43a3-9a50-b30d7727c0eb.jaredpalmer.formik",
      "fullName": "jaredpalmer/formik",
      "text": "Lorem ipsum dolor sit amet, per brute apeirian ei. Malis facilisis vel ex, ex vivendo signiferumque nam, nam ad natum electram constituto. Causae latine at sea, ex nec ullum ceteros, est ut dicant splendide. Omnis electram ullamcorper est ut.",
      "rating": 96,
      "createdAt": "2021-03-13T06:13:37.799Z",
    },
    {
      "id": "9b9d927e-2ee9-4f93-b96b-c8f677c63a5f.jaredpalmer.formik",
      "fullName": "jaredpalmer/formik",
      "text": "Lorem ipsum dolor sit amet, per brute apeirian ei. Malis facilisis vel ex, ex vivendo signiferumque nam, nam ad natum electram constituto. Causae latine at sea, ex nec ullum ceteros, est ut dicant splendide. Omnis electram ullamcorper est ut.",
      "rating": 89,
      "createdAt": "2021-03-13T07:13:37.799Z",
    }
  ]

  return (
    <FlatList
      data={myReviews}
      ItemSeparatorComponent={ListItemSeparator}
      renderItem={({ item }) => <Review review={item} />}
      keyExtractor={({ id }) => id}
    />
  );
};

export default MyReviews;
