import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigator from './Home';

import { createDrawerNavigator } from '@react-navigation/drawer';

const drawer=createDrawerNavigator()

const Stack = createStackNavigator();


const RootNavigator = () => {
  return (
    <NavigationContainer>
      <HomeNavigator/>
    </NavigationContainer>
  );
};

export default RootNavigator;
