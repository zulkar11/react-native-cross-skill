import React from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ThreeDot from '../../assets/image/icon/three_dot.png';
import Search from '../../assets/image/icon/search.png';
import Cart from './../../assets/image/icon/cart.png';
import {useNavigation, DrawerActions} from '@react-navigation/native';

export const TopBar = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.topBar}>
      <TouchableOpacity onPress={openDrawer}>
        <Image source={ThreeDot} />
      </TouchableOpacity>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for products.."
          style={styles.searchInput}
        />
        <Image source={Search} style={styles.searchImage} />
      </View>
      <Image source={Cart} style={styles.cartImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 31,
    backgroundColor: '#FAFAFA',
    position: 'relative',
  },
  searchInput: {
    marginRight: 8,
    flex: 1,
  },
  cartImage: {
    width: 24,
    height: 24,
  },
  searchImage: {
    width: 24,
    height: 24,
    paddingRight: 10,
    position: 'absolute',
    right: 10,
  },
});
