/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons';
import { MyReservationsScreen } from '../screens/MyReservationsScreen';
import { MeScreen } from '../screens/MeScreen';
import { colors } from '../theme/theme';
import { ReserveNavigation } from './ReserveNavigation';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
    sceneContainerStyle={{ backgroundColor: 'white' }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconName: string = '';
        switch ( route.name ) {
          case 'Reservar':
            iconName = 'fitness';
            break;
          case 'Mis Reservaciones':
            iconName = 'calendar';
            break;
          case 'Mi perfil':
            iconName = 'contact';
            break;
          default:
            break;
        }
        return <Icon name={ iconName } color={ color } />;
      },
      tabBarActiveTintColor: colors.primary,
      headerShown: false,
    })}
  >
      <Tab.Screen name="Reservar" component={ ReserveNavigation } />
      <Tab.Screen name="Mis Reservaciones" component={ MyReservationsScreen } />
      <Tab.Screen name="Mi perfil" component={ MeScreen } />
    </Tab.Navigator>
  );
};
