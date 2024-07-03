import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CategoryComponent} from '../components/CategoryDrawer';
import {TabNavigator} from './TabNavigator';
import {TopBar} from '../components/TopBar';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CategoryComponent {...props} />}
      screenOptions={{
        header: () => <TopBar />,
      }}>
      <Drawer.Screen name="HomeTabs" component={TabNavigator} />
    </Drawer.Navigator>
  );
};
