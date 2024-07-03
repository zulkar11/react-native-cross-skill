import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface SearchtProps {}

export const Search: React.FC<SearchtProps> = () => {
  return (
    <View style={styles.container}>
      <Text>SearchtProps</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
