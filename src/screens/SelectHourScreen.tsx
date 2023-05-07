/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/ReserveNavigation';
import { AvailableHourCard } from '../components/AvailableHourCard';
import { getMonthNameFromNumber } from '../helpers/date';
import { useAvailability } from '../hooks/useAvailability';
import { styles } from '../theme/theme';


interface Props extends StackScreenProps<RootStackParams, 'SelectHour'>{}

export const SelectHourScreen = ({ route }: Props) => {

  const { day, month, dateString } = route.params;

  const { goBack } = useNavigation();

  const { availableHours, isLoading, isError, errorMessage } = useAvailability(dateString);

  return (
    <SafeAreaView style={{ ...styles.globalMargin, flex: 1 }}>
      <View style={{ marginTop: 20, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }} onPress={ goBack }>
          <Icon name="arrow-back" size={ 25 } />
        </TouchableOpacity>
        <View style={{ width: 20 }} />
        <View style={{ flex: 20 }}>
          <Text style={{ fontSize: 18, alignSelf: 'flex-start' }}>
            Horarios disponibles para el { day } de { getMonthNameFromNumber(month) }
          </Text>
        </View>
      </View>
      <View style={{ height: 10 }} />
      <ScrollView>
        {
          ( isLoading ) && <ActivityIndicator style={{ marginTop: 25 }} />
        }
        {
          ( isError ) && <Text style={{ fontSize: 18, marginTop: 25 }}>{ errorMessage }</Text>
        }
        <View style={{ flex: 1, alignItems: 'center' }}>
          {
            (availableHours?.availableHours.length === 0)
            ? ( <Text style={{ fontSize: 18, marginTop: 25 }}>No hay horarios disponibles</Text> )
            : availableHours?.availableHours.map( ({ startTime, endTime }) => (
                <AvailableHourCard
                  key={ `${ startTime }-${ endTime }` }
                  startTime={ startTime }
                  endTime={ endTime }
                  day={ day }
                  monthName={ getMonthNameFromNumber(month) }
                  dateString={ dateString }
                />
              ))
          }
        </View>
        <View style={{ height: 25 }} />
      </ScrollView>
    </SafeAreaView>
  );
};
