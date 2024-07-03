import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Category} from '../screens/Category';
import Order from '../screens/Order';
import LoginPage from '../screens/Login';
import {StackNavigation} from './StackNavigator';

const Tab = createBottomTabNavigator();
export const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="stack"
        component={StackNavigation}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Login"
        component={LoginPage}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
