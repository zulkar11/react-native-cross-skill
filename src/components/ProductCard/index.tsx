import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface ProductCardProps {
  title: string;
  image?: string;
  regularPrice: string;
  discountPrice?: string;
  isNew: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  regularPrice,
  discountPrice,
  isNew = false,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <Text>{title}</Text>
      <Text> {regularPrice} </Text>
      <Text> {discountPrice} </Text>
      <Text> {isNew} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
});
