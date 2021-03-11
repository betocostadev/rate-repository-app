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
    flex: 0.75,
    paddingRight: 2
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
  itemBody: {
    padding: 6,
    paddingTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemDetail: {
    alignItems: 'center'
  },
  itemPaddingBottom: {
    paddingBottom: 8
  }
});

const RepositoryItem = ({ avtImage, fullName, description, language, stars, forks, reviews, ratings }) => {
  const displayCount = (count) => {
    if (count >= 100000) {
      const str = String(count);
      return `${str.slice(0,3)}.${str.slice(3,4)}k`;
    } else if (count < 100000 && count >= 10000) {
      const str = String(count);
      return `${str.slice(0,2)}.${str.slice(2,3)}k`;
    } else if (count < 10000 && count >= 1000) {
      const str = String(count);
      return `${str.slice(0,1)}.${str.slice(1,2)}k`;
    } else {
      const str = String(count);
      return str;
    }
  };

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
      <View style={styles.itemBody}>
        <View style={styles.itemDetail}>
          <Text fontSize="subheading" fontWeight="bold">{displayCount(stars)}</Text>
          <Text fontSize="subheading" color="textSecondary">Stars</Text>
        </View>
        <View style={styles.itemDetail}>
          <Text fontSize="subheading" fontWeight="bold">{displayCount(forks)}</Text>
          <Text fontSize="subheading" color="textSecondary">Forks</Text>
        </View>
        <View style={styles.itemDetail}>
          <Text fontSize="subheading" fontWeight="bold">{reviews}</Text>
          <Text fontSize="subheading" color="textSecondary">Reviews</Text>
        </View>
        <View style={styles.itemDetail}>
          <Text fontSize="subheading" fontWeight="bold">{ratings}</Text>
          <Text fontSize="subheading" color="textSecondary">Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
