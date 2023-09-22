import React from 'react';
import {Provider} from 'react-redux';
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
import Executives from './src/pages/Executives';
import Legislatives from './src/pages/Legislatives';
import FireService from './src/pages/FireService';
import HealthService from './src/pages/HealthService';
import NigerianAirForce from './src/pages/NigerianAirForce';
import NigerianArmy from './src/pages/NigerianArmy';
import NigerianNavy from './src/pages/NigerianNavy';
import NigeriaSecurityAndCivilDefence from './src/pages/NigeriaSecurityAndCivilDefence';
import PoliceForce from './src/pages/PoliceForce';
import {persistor, store} from './src/features/configureStore';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
              <Stack.Screen name="Executives" component={Executives} />
              <Stack.Screen name="Legislatives" component={Legislatives} />
              <Stack.Screen name="FireService" component={FireService} />
              <Stack.Screen name="HealthService" component={HealthService} />
              <Stack.Screen
                name="NigerianAirForce"
                component={NigerianAirForce}
              />
              <Stack.Screen name="NigerianArmy" component={NigerianArmy} />
              <Stack.Screen name="NigerianNavy" component={NigerianNavy} />
              <Stack.Screen
                name="NigeriaSecurityAndCivilDefence"
                component={NigeriaSecurityAndCivilDefence}
              />
              <Stack.Screen name="PoliceForce" component={PoliceForce} />
            </Stack.Navigator>
          </NavigationContainer>
        </GluestackUIProvider>
      </PersistGate>
    </Provider>
  );
}
