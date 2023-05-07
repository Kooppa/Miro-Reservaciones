/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-ionicons';
import { useNavigation } from '@react-navigation/native';
import { colors, styles } from '../theme/theme';
import { useReserve } from '../hooks/useReserve';

interface Props {
  startTime: string;
  endTime: string;
  day: number;
  monthName: string;
  dateString: string;
}
export const AvailableHourCard = ({ startTime, endTime, day, monthName, dateString }: Props) => {

  const { navigate } = useNavigation();
  const { reserve } = useReserve();

  const handleReserve = async() => {
    const success = await reserve({ startTime, endTime, day: dateString });
    if (success) {
      navigate('Confirmation' as never, { startTime, endTime, day, monthName } as never);
    } else {
      navigate('Error' as never);
    }
  };

  return (
    <TouchableOpacity
      onPress={ () => handleReserve() }
      style={{ ...styles.card, width: '98%', height: 120, padding: 20, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}
    >
      <View style={{ flex: 5, justifyContent: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: colors.primary }}>{ startTime } - { endTime }</Text>
        <Text style={{ fontSize: 16, marginTop: 10 }}>1 hora</Text>
      </View>
      <View style={{ flex: 2, alignItems: 'center' }}>
        <Icon name="fitness" size={ 80 } />
      </View>
    </TouchableOpacity>
  );
};
