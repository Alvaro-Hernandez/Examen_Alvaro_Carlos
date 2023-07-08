import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Views/HomeScreen';
import ProgressScreen from '../Views/ProgressScreen';
import NutritionScreen from '../Views/NutritionScreen';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Progress" component={ProgressScreen} />
      <Tab.Screen name="Nutrition" component={NutritionScreen} />
    </Tab.Navigator>
  );
}

export default AppNavigator;