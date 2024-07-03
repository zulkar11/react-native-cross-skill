import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface TextInputProps {}

export const TextInput: React.FC<TextInputProps> = () => {
  return (
    <View style={styles.container}>
      <Text>TextInputProps</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
