import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import WelcomeScreen from '../screens/Welcome';
import IntroScreen from '../screens/Intro';
import ProductScreen from '../screens/ProductScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import TestScreen from '../screens/TestScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* First screens before you enter the tab navigator */}
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen}/>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="TestScreen" component={TestScreen} />
      {/* Main app with bottom tabs */}
      <Stack.Screen name="MainTabs" component={TabNavigation} />
    </Stack.Navigator>
  );
}
