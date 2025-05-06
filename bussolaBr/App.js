import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';

import HomeScreen from './screens/HomeScreen';
import Cadastro from './screens/Cadastro';
import Login from './screens/Login';
import Perfil from './screens/Perfil';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopWidth: 0,
          height: 50,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarIcon: ({ focused }) => {
          let iconName;

          switch (route.name) {
            case 'HomeScreen':
              iconName = 'home';
              break;
            case 'Perfil':
              iconName = 'user';
              break;
            default:
              iconName = 'circle'; // ícone padrão caso algo falhe
          }

          return (
            <Feather
              name={iconName}
              size={25}
              color={focused ? '#FFD700' : '#fff'}
            />
          );
        },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
