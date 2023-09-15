import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from './src/pages/SplashScreen';
import {GluestackUIProvider, Text} from '@gluestack-ui/themed';
import {config} from './gluestack-ui.config';
import Onboarding from './src/pages/Onboarding';
import SignUp from './src/pages/SignUp';
import SignIn from './src/pages/SignIn';
import Dashboard from './src/pages/Dashboard';
import Profile from './src/pages/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
