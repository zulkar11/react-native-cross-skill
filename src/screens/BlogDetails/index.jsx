import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {useBlogDetailsQuery} from './blogDetailsApi';

const BlogDetailsScreen = ({route}) => {
  const {blogId} = route.params;
  const {data, error, isLoading} = useBlogDetailsQuery(blogId);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.content}>{data.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
  },
});

export default BlogDetailsScreen;
