import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useProductDetailsQuery} from './productDetailsSlice';
import {CustomButton} from '../../components/CustomButton';

const ProductDetails = ({route, navigation}) => {
  // Extract the product slug from the navigation route
  const {slug} = route.params;

  // Call the API to fetch product details
  const {data, error, isLoading} = useProductDetailsQuery(slug);

  return (
    <View style={styles.container}>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Error: {error.message}</Text>}
      {data && (
        <>
          <Text>Product Details</Text>
          <Text>Product Name: {data.name}</Text>
          <Text>Description: {data.description}</Text>
          {/* Display other product details */}
        </>
      )}
      <CustomButton
        text="Navigation Toggle"
        onPress={() => navigation.toggleDrawer()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

export default ProductDetails;
