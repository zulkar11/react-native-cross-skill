import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useFetchPageQuery} from './generalPageSlice';

const GeneralPage = ({pageSlug}) => {
  // Fetch page data using useFetchPageQuery hook
  const {data, isLoading, isError} = useFetchPageQuery(pageSlug);

  return (
    <View style={styles.container}>
      <Text>{pageSlug}</Text>
      {isLoading && <Text>Loading...</Text>}
      {isError && <Text>Error: {isError.message}</Text>}
      {data && (
        <View>
          <Text>Page Content:</Text>
          <Text>{data}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GeneralPage;
