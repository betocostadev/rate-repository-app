import React from 'react';
import { Image, StyleSheet, View, TouchableHighlight, Button } from 'react-native';
import { useHistory } from 'react-router-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import * as Linking from 'expo-linking';
import { Feather } from '@expo/vector-icons';
import Text from '../Shared/Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  itemWithReview: {
    backgroundColor: 'white',
    paddingVertical: 10,
    marginBottom: 12
  },
  itemHeader: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  itemHeaderA: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  itemButton: {
    marginTop: 12,
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
  },
  backNavView: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingTop: 4,
  },
  backNavIcon: {
    padding: 3,
    marginHorizontal: 8,
    backgroundColor: theme.colors.primary,
    borderRadius: 100
  },
  backNavText: {
    alignSelf: 'center',
    paddingHorizontal: 10,
    borderStyle: 'solid',
    borderColor: theme.colors.primary,
    borderBottomWidth: 1,
  }
});

const RepositoryItem = ({ singleItem, id, avtImage, fullName, description, language, stars, forks, reviews, ratings, url }) => {
  const history = useHistory();

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

  const repositorySelect = () => {
    history.push(`/${id}`);
  };

  const handleGoBack = () => {
    history.push('/');
  };

  const handleGoToGithub = () => {
    Linking.openURL(url);
  };

  const SingleRepo = () => {
    return (
      <View>
        <View style={styles.backNavView}>
          <BorderlessButton style={styles.backNavIcon} onPress={handleGoBack}>
            <Feather name="arrow-left" size={36} color="#eee" />
          </BorderlessButton>
          <Text style={styles.backNavText} fontWeight="bold" fontSize="title">Back to repositories</Text>
        </View>

        <View style={styles.itemWithReview}>
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
            <View style={styles.itemButton}>
              <Button
                title="Open in Github"
                color={theme.colors.primary}
                onPress={handleGoToGithub}
                accessibilityLabel="Open repository link in Github"
              />
            </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      {
        !singleItem
        ?
        <TouchableHighlight onPress={repositorySelect}>
          <View>
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
          </View>
        </TouchableHighlight>
        :
        <SingleRepo />
      }
    </View>
  );
};

export default RepositoryItem;
