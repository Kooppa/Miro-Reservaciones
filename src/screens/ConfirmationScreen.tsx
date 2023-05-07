/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-ionicons';
import { styles, colors } from '../theme/theme';
import { AuthContext } from '../context/AuthContext';
import { RootStackParams } from '../navigation/ReserveNavigation';
import { useMyReservations } from '../hooks/useMyReservations';

interface Props extends StackScreenProps<RootStackParams, 'Confirmation'>{}

export const ConfirmationScreen = ({ route }: Props) => {

  const { day, monthName, startTime, endTime } = route.params;
  const { user } = useContext( AuthContext );
  const navigation = useNavigation();

  useMyReservations();

  return (
    <SafeAreaView style={{ ...styles.globalMargin, flex: 1 }}>
      <View style={{ flex: 1, marginTop: 30 }}>
        <Text style={{ ...styles.title, textAlign: 'center' }}>Reservación Exitosa</Text>
        <Icon name="happy" size={ 100 } style={{ textAlign: 'center' }} />
        <View>
          <Text style={{ ...styles.subtitle, marginTop: 25 }}>Fecha:</Text>
          <Text style={{ fontSize: 18 }}>{`${ day } de ${ monthName }`}</Text>
          <Text style={{ ...styles.subtitle, marginTop: 25 }}>Hora:</Text>
          <Text style={{ fontSize: 18 }}>{`${ startTime } - ${ endTime }`}</Text>
          <Text style={{ ...styles.subtitle, marginTop: 25 }}>Nombre:</Text>
          <Text style={{ fontSize: 18 }}>{ user?.firstName } { user?.lastName }</Text>
        </View>
        <TouchableOpacity
          onPress={ () => navigation.navigate('Menu' as never) }
          style={{ backgroundColor: colors.primary, borderRadius: 8, marginTop: 20, width: 200, alignSelf: 'center' }}
        >
          <Text style={{ color: 'white', fontSize: 18, paddingHorizontal: 25, paddingVertical: 12, textAlign: 'center' }}>
            Regresar al menú
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
