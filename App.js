import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import Personnages from './screens/Personnages';
import About from './screens/AboutScreen';
import CharacterDetails from './screens/CharacterDetails';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CustomTabIcon = ({ icon }) => (
  <View style={{ alignItems: 'center' }}>
    {icon}
  </View>
);

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let icon;

        if (route.name === 'Home') {
          icon = <CustomTabIcon icon={<FontAwesome name="home" size={size} color="#3B5998" />} />;
        } else if (route.name === 'Personnages') {
          icon = <CustomTabIcon icon={<FontAwesome name="users" size={size} color="#3B5998" />} />;
        } else if (route.name === 'A propos') {
          icon = <CustomTabIcon icon={<FontAwesome name="info-circle" size={size} color="#3B5998" />} />;
        }

        return icon;
      },
      tabBarActiveTintColor: '#3B5998',
      tabBarInactiveTintColor: '#C0C0C0',
      tabBarStyle: {
        backgroundColor: '#C0C0C0',
      },
      headerStyle: {
        backgroundColor: '#C0C0C0',
      },
      headerTitle: '',
      headerTintColor: '#3B5998',
      headerTitleStyle: {
        fontSize: 24,
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Personnages" component={Personnages} />
    <Tab.Screen name="A propos" component={About} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}