import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IMAGE_BASE_URL} from '../../libs/variable';
import {useHomePageDataQuery} from './HomeSlice';
import CustomText from '../../components/CustomText';
import {Slider} from '../../components/slider';
import {ProductCard} from '../../components/ProductCard';

const HomeScreen = ({navigation}) => {
  const [threeCategory, setThreeCategory] = useState('topSale');

  const {data, error, loading} = useHomePageDataQuery();

  return (
    <ScrollView style={styles.container}>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}

      {data?.banner && (
        <View style={styles.heroSlider}>
          <Slider data={data.banner} />
        </View>
      )}

      <CustomText text="Explore Home Appliances" style={styles.categoryTitle} />

      <View style={styles.categoryList}>
        {data?.category &&
          data.category.map((category, index) => (
            <TouchableOpacity
              key={category.id}
              style={styles.categoryItem}
              onPress={() =>
                navigation.navigate('ProductList', {category: category.slug})
              }>
              <Image
                source={{uri: `${IMAGE_BASE_URL}/category/${category.image}`}}
                style={styles.categoryImage}
              />
              <CustomText text={category.title} />
            </TouchableOpacity>
          ))}
      </View>

      <View style={styles.specialCategory}>
        <Text
          onPress={() => setThreeCategory('topSale')}
          style={[
            styles.specialCategoryText,
            threeCategory === 'topSale' && styles.specialCategoryActive,
          ]}>
          Top Sale
        </Text>
        <Text
          onPress={() => setThreeCategory('newArrival')}
          style={[
            styles.specialCategoryText,
            threeCategory === 'newArrival' && styles.specialCategoryActive,
          ]}>
          New Arrivals
        </Text>
        <Text
          onPress={() => setThreeCategory('featureProduct')}
          style={[
            styles.specialCategoryText,
            threeCategory === 'featureProduct' && styles.specialCategoryActive,
          ]}>
          Featured Products
        </Text>
      </View>

      {data &&
        data[threeCategory]?.map((item, index) => (
          <ProductCard
            key={index}
            title={item.title}
            image={`${IMAGE_BASE_URL}/product/${item.image}`}
            regularPrice={item.regular_price}
            discountPrice={item.discount_price}
            isNew={item.is_new}
          />
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heroSlider: {
    height: 165,
  },
  categoryTitle: {
    textAlign: 'center',
    paddingTop: 32,
    marginBottom: 6,
  },
  categoryList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  categoryItem: {
    width: '30%',
    marginBottom: 16,
    alignItems: 'center',
  },
  categoryImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  specialCategory: {
    backgroundColor: '#F1F1F1',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 28,
  },
  specialCategoryText: {
    color: '#0C1A30',
    textDecorationLine: 'none',
    fontWeight: '500',
  },

  specialCategoryActive: {
    color: '#164194',
    textDecorationLine: 'underline',
    fontWeight: '700',
  },
});

export default HomeScreen;
