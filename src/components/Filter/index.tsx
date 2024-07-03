import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface FilterProps {}

export const Filter: React.FC<FilterProps> = () => {
  return (
    <View style={styles.container}>
      <Text>FilterProps</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
