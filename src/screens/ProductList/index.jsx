import React from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useGetProductsQuery } from './productListSlice';

const ProductList = ({ route }) => {
  const { category } = route.params;

  const { data, error, isLoading } = useGetProductsQuery({ category });

  console.log("data", data?.data?.rows);

  if (isLoading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List for Category: {category}</Text>
      {data?.data?.rows && (
        <FlatList
          data={data?.data?.rows}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <Text>{item.title}</Text>
              {/* Render other product details as needed */}
            </View>
          )}
        />
      )}
      {(!data || data.length === 0) && (
        <Text style={styles.noProductsText}>No products found for this category.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  noProductsText: {
    textAlign: 'center',
    marginTop: 20,
    fontStyle: 'italic',
  },
});

export default ProductList;
