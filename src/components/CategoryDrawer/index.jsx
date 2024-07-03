import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useCategoryPageDataQuery } from '../../screens/Category/categorySlice';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

export const CategoryComponent = ({props}) => {
   const { data } = useCategoryPageDataQuery();


   const categories = data?.data?.rows;

  return (
    <View style={styles.container}>
      <Text>Category</Text>
         {categories?.filter((catetogry) => catetogry.parent_category === "").map((parentCategory) => (
          <View key={parentCategory.id}>
            <Text style={styles.parentCategory}>{parentCategory.title}</Text>
          </View>
        ))} 
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
