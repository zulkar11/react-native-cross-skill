import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface UserDrawerProps {}

export const UserDrawer: React.FC<UserDrawerProps> = () => {
  return (
    <View style={styles.container}>
      <Text>UserDrawer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
