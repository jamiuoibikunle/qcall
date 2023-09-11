import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/pages/SplashScreen';
import {GluestackUIProvider, Text} from '@gluestack-ui/themed';
import {config} from './gluestack-ui.config';

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <SplashScreen />
    </GluestackUIProvider>
  );
}
