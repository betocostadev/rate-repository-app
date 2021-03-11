import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
  },
  itemHeader: {
    flexDirection: 'row',
    height: 120,
    paddingTop: 5
  },
  itemHeaderA: {
    flex: 0.25,
    alignItems: 'center',
  },
  itemHeaderB: {
    flex: 0.75
  },
  itemLanguage: {
    backgroundColor: '#0366d6',
    padding: 6,
    borderRadius: 8,
    alignSelf: 'flex-start'
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8
  },
  itemBottom: {
    paddingBottom: 10
  },
  itemLine: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  itemPaddingBottom: {
    paddingBottom: 8
  }
});

const RepositoryItem = ({ avtImage, fullName, description, language, stars, forks, reviews, ratings }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemHeader}>
        <View style={styles.itemHeaderA}>
          <Image style={styles.itemImage} source={{ uri: avtImage}} />
        </View>
        <View style={styles.itemHeaderB}>
          <Text fontWeight="bold" fontSize="title" style={styles.itemPaddingBottom}>{fullName}</Text>
          <Text fontSize="subheading" color="textSecondary" style={styles.itemPaddingBottom}>{description}</Text>
          <View style={styles.itemLanguage}>
            <Text color="textWhite" fontWeight="bold" style={{ alignSelf: 'center'}}>{language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.itemBottom}>
        <View style={styles.itemLine}>
          <Text fontSize="subheading" fontWeight="bold">{stars}</Text>
          <Text fontSize="subheading" fontWeight="bold">{forks}</Text>
          <Text fontSize="subheading" fontWeight="bold">{reviews}</Text>
          <Text fontSize="subheading" fontWeight="bold">{ratings}</Text>
        </View>
        <View style={styles.itemLine}>
          <Text fontSize="subheading" color="textSecondary">Stars</Text>
          <Text fontSize="subheading" color="textSecondary">Forks</Text>
          <Text fontSize="subheading" color="textSecondary">Reviews</Text>
          <Text fontSize="subheading" color="textSecondary">Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
