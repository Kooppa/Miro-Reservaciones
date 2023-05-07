/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/theme';

export const Footer = () => {
  return (
    <View style={{ flex: 1, ...styles.borderTop }}>
      <View>
        <Text style={{ fontSize: 16, marginTop: 20, textAlign: 'center' }}>
          Aplicación exclusiva para miembros de Miró Inspira, Zibatá
        </Text>
      </View>
    </View>
  );
};
