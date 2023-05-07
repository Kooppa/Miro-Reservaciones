/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-ionicons';
import { colors, styles } from '../theme/theme';

interface Props {
  startTime: string;
  endTime: string;
  day: string;
}
export const MyReservationCard = ({ startTime, endTime, day }: Props) => {

  return (
    <View style={{ ...styles.card, width: '98%', height: 120, padding: 20, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
      <View style={{ flex: 5, justifyContent: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: colors.primary }}>{ startTime } - { endTime }</Text>
        <Text style={{ fontSize: 16, marginTop: 10 }}>{ day }</Text>
      </View>
      <View style={{ flex: 2, alignItems: 'center' }}>
        <Icon name="fitness" size={ 80 } />
      </View>
    </View>
  );
};
