import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, TouchableOpacity} from 'react-native';
import BackIcon from './../assets/image/icon/left_arrow.png';

import Login from '../screens/Login';
import ResetPassword from '../screens/Login/Reset';
import VerificationPassword from '../screens/Login/Verification';
import UpdatePassword from '../screens/Login/Update';
import Registration from '../screens/Login/Registration';

import Cart from '../screens/Cart';
import Category from '../screens/Category';
import Checkout from '../screens/Checkout';
import GeneralPage from '../screens/GeneralPage';
import HomePage from '../screens/Home';
import Order from '../screens/Order';
import ProductDetails from '../screens/ProductDetails';
import ProductList from '../screens/ProductList';
import Profile from '../screens/Profile';
import UpdateProfile from '../screens/UpdateProfile';

const Stack = createStackNavigator();

const LoginCustomHeader = ({navigation}) => {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity
      onPress={handleBack}
      style={{
        paddingLeft: 28,
        paddingTop: 20,
        paddingBottom: 5,
        backgroundColor: '#FFFFFF',
      }}>
      <Image source={BackIcon} />
    </TouchableOpacity>
  );
};

export const LoginStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Reset"
        component={ResetPassword}
        options={{
          headerShown: true,
          header: ({navigation}) => (
            <LoginCustomHeader navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="Verification"
        component={VerificationPassword}
        options={{
          headerShown: true,
          header: ({navigation}) => (
            <LoginCustomHeader navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="UpdatePassword"
        component={UpdatePassword}
        options={{
          headerShown: true,
          header: ({navigation}) => (
            <LoginCustomHeader navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{
          headerShown: true,
          header: ({navigation}) => (
            <LoginCustomHeader navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="GeneralPage" component={GeneralPage} />
      <Stack.Screen name="Order" component={Order} />
    </Stack.Navigator>
  );
};

export const ProfileStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
    </Stack.Navigator>
  );
};
