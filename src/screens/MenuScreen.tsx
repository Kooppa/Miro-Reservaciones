/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { esCalendar } from '../helpers/date';
import { useDate } from '../hooks/useDate';
import { colors, styles } from '../theme/theme';

export const MenuScreen = () => {

  const { navigate } = useNavigation();
  const { currentDateFormatted, plusOneMonthFormatted } = useDate();

  LocaleConfig.locales.es = esCalendar;
  LocaleConfig.defaultLocale = 'es';

  return (
    <SafeAreaView style={{ ...styles.globalMargin, flex: 1 }}>
      <View style={{ flex: 1, marginTop: 30, alignItems: 'center' }}>
        <View>
          <Text style={{ ...styles.title, textAlign: 'center' }}>Reservar</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: colors.primary, fontSize: 16, textAlign: 'center' }}>
            Selecciona el día del mes actual que deseas reservar el gimnasio
          </Text>
        </View>
        <View style={{ marginTop: 25 }}>
          <Calendar
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              height: 380,
              width: 360,
              borderRadius: 8,
            }}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e',
            }}
            allowSelectionOutOfRange={ false }
            maxDate={ plusOneMonthFormatted }
            minDate={ currentDateFormatted }
            onDayPress={( day ) => { navigate('SelectHour' as never, day as never); }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
