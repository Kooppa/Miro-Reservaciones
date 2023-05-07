import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { LoadingScreen } from '../screens/LoadingScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { RegistrationScreen } from '../screens/RegistrationScreen';
import { Tabs } from './Tabs';

const Stack = createStackNavigator();

export const Navigation = () => {

  const { status } = useContext( AuthContext );

  if ( status === 'checking' ) { return <LoadingScreen />; }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      {
        (status !== 'authenticated')
        ? (
          <>
            <Stack.Screen name="Login" component={ LoginScreen } />
            <Stack.Screen name="Registration" component={ RegistrationScreen } />
          </>
        )
        : (
          <>
            <Stack.Screen name="Tabs" component={ Tabs } />
          </>
        )
      }
    </Stack.Navigator>
  );
};
