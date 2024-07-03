import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {
  useAddToWishListMutation,
  useWishListPageDataQuery,
  useDeleteFromWishListMutation,
} from './wishlistSlice';

const WishList= () => {
  // Fetch wish list data
  const {data: wishListData, isLoading, isError} = useWishListPageDataQuery();

  // Mutation hooks for adding and removing from wish list
  const [addToWishList] = useAddToWishListMutation();
  const [deleteFromWishList] = useDeleteFromWishListMutation();

  // Function to handle adding an item to wish list
  const handleAddToWishList = (productId, userId) => {
    addToWishList({productId, userId});
  };

  // Function to handle removing an item from wish list
  const handleRemoveFromWishList = productId => {
    deleteFromWishList(productId);
  };

  return (
    <View style={styles.container}>
      <Text>Wish List Page</Text>
      {isLoading && <Text>Loading...</Text>}
      {isError && <Text>Error: {isError.message}</Text>}
      {wishListData && (
        <View>
          <Text>Wish List Items:</Text>
          {wishListData.map(item => (
            <View key={item.productId}>
              <Text>Product ID: {item.productId}</Text>
              <Text>User ID: {item.userId}</Text>
              <Button
                title="Remove from Wish List"
                onPress={() => handleRemoveFromWishList(item.productId)}
              />
            </View>
          ))}
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

export default WishList;
