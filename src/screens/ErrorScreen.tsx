/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-ionicons';
import { styles, colors } from '../theme/theme';

export const ErrorScreen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ ...styles.globalMargin, flex: 1 }}>
      <View style={{ flex: 1, marginTop: 30 }}>
        <Text style={{ ...styles.title, textAlign: 'center', color: 'red' }}>Ha ocurrido un error</Text>
        <Icon name="sad" size={ 100 } style={{ textAlign: 'center' }} />
        <View>
          <Text style={{ fontSize: 18 }}>Intenta reservar más tarde o contacta a la administración</Text>
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
