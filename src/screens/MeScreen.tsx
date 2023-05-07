/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../theme/theme';
import { AuthContext } from '../context/AuthContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-ionicons';

export const MeScreen = () => {

  const { user, logOut } = useContext(AuthContext);

  return (
    <SafeAreaView style={{ ...styles.globalMargin, flex: 1 }}>
      <View style={{ flex: 1, marginTop: 30, alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center' }}
            onPress={ () => logOut() }
          >
            <Icon name="log-out" color="red" size={ 30 } />
          </TouchableOpacity>
          <View style={{ flex: 10 }}>
            <Text style={{ ...styles.title, textAlign: 'center', right: 15 }}>Mi perfil</Text>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Icon name="contact" size={ 120 } />
        </View>
        <View style={{  }}>
          <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 16 }}>{ user?.firstName } { user?.lastName }</Text>
          <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 16 }}>{ user?.email }</Text>
          <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 16 }}>
            Sección { user?.section }
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
