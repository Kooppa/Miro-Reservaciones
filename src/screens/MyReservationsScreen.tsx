/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator, Text, View, ScrollView } from 'react-native';
import { useMyReservations } from '../hooks/useMyReservations';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../theme/theme';
import { MyReservationCard } from '../components/MyReservationCard';

export const MyReservationsScreen = () => {

  const { reservations, isLoading } = useMyReservations();

  return (
    <SafeAreaView style={{ ...styles.globalMargin, flex: 1 }}>
        <View style={{ flex: 1, marginTop: 30, alignItems: 'center' }}>
          <View>
            <Text style={{ ...styles.title, textAlign: 'center' }}>Mis reservaciones</Text>
          </View>
          <ScrollView style={{ width: '100%' }}>
            <View style={{ marginTop: 10, alignSelf: 'center' }}>
              {
                ( isLoading ) && <ActivityIndicator size={ 50 } />
              }
              {
                ( !isLoading && reservations.length === 0 ) ? <Text style={{ fontSize: 16 }}>No tienes reservaciones</Text>
                  : reservations.map( ({ day, endTime, startTime }) => (
                    <MyReservationCard key={ day + endTime + day } day={ day } endTime={ endTime } startTime={ startTime } />
                  ))
              }
            </View>
          </ScrollView>
        </View>
    </SafeAreaView>
  );
};
