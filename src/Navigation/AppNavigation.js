import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Views/HomeScreen';
import ProgressScreen from '../Views/ProgressScreen';
import NutritionScreen from '../Views/NutritionScreen';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen name="FitnessPro" component={HomeScreen} />
      <Tab.Screen name="Progress" component={ProgressScreen} />
      <Tab.Screen name="Nutrition" component={NutritionScreen} />
    </Tab.Navigator>
  );
}

const tabScreenOptions = ({route}) => ({
  headerStyle: {
    backgroundColor: '#00D3A0',
  },
  headerTintColor: '#fff',
  tabBarActiveTintColor: '#fff',
  tabBarInactiveTintColor: '#222',
  tabBarLabelStyle: {
    fontSize: 12,
  },
  tabBarStyle: {
    display: 'flex',
    backgroundColor: '#00D3A0',
  },
});

export default AppNavigator;
