import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ConfirmationScreen } from '../screens/ConfirmationScreen';
import { MenuScreen } from '../screens/MenuScreen';
import { SelectHourScreen } from '../screens/SelectHourScreen';
import { Confirmation, ReservationDate } from '../interfaces/reservation';

export type RootStackParams = {
  Menu: undefined;
  SelectHour: ReservationDate;
  Confirmation: Confirmation;
  Error: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const ReserveNavigation = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Menu" component={ MenuScreen } />
      <Stack.Screen name="SelectHour" component={ SelectHourScreen } />
      <Stack.Screen name="Confirmation" component={ ConfirmationScreen } />
    </Stack.Navigator>
  );
};
