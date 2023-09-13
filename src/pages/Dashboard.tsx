import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from '@gluestack-ui/themed';
import React from 'react';
import Home from './dashboard/Home';
import Register from './dashboard/Register';
import Menu from './dashboard/Menu';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function Dashboard() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {height: 60},
        tabBarLabelStyle: {height: 20},
        tabBarIcon: ({focused, color, size}) => {
          if (route.name == 'Home')
            return <AntDesign name="home" size={size} color={color} />;
          else if (route.name == 'Register')
            return <SimpleLineIcons name="note" size={size} color={color} />;
          else if (route.name == 'Menu')
            return <Ionicons name="menu" size={size} color={color} />;
        },
        tabBarActiveTintColor: '#d42e12',
        tabBarInactiveTintColor: 'rgba(212, 46, 18, 0.65)',
      })}>
      <Tab.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Tab.Screen
        options={{headerShown: false}}
        name="Register"
        component={Register}
      />
      <Tab.Screen options={{headerShown: false}} name="Menu" component={Menu} />
    </Tab.Navigator>
  );
}

export default Dashboard;
