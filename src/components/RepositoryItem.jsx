import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  itemText: {
    fontSize: 16,
  },
});

const RepositoryItem = ({ fullName, description, language, stars, forks, reviews, ratings }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>Full name: {fullName}</Text>
      <Text style={styles.itemText}>Description: {description}</Text>
      <Text style={styles.itemText}>Language: {language}</Text>
      <Text style={styles.itemText}>Stars: {stars}</Text>
      <Text style={styles.itemText}>Forks: {forks}</Text>
      <Text style={styles.itemText}>Reviews: {reviews}</Text>
      <Text style={styles.itemText}>Rating: {ratings}</Text>
    </View>
  );
};

export default RepositoryItem;
