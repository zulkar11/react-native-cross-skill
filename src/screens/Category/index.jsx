import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useCategoryPageDataQuery} from './categorySlice';

export const Category = () => {



  return (
    <View style={styles.container}>
            <Text>Category Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  parentCategory: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
});
