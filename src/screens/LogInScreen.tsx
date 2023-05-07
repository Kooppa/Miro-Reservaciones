/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, Image, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Footer } from '../components/Footer';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';
import { useShowToast } from '../hooks/useShowToast';
import { styles, colors } from '../theme/theme';

export const LoginScreen = () => {

  const navigation = useNavigation();

  const { logIn, errorMessage, isLoading } = useContext(AuthContext);

  const { showWarningToast } = useShowToast();

  const { form, onChange } = useForm({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (errorMessage !== '') {
      showWarningToast(errorMessage);
    }
  }, [ errorMessage ]);

  const handleLogIn = () => {
    if (form.email.trim() === '') {
      return showWarningToast('Ingresa tu correo electrónico');
    }
    if (form.password === '') {
      return showWarningToast('Ingresa tu contraseña');
    }
    logIn(form);
  };

  return (
    <KeyboardAvoidingView behavior={ Platform.OS === 'ios' ? 'padding' : 'height' } style={{ flex: 1}} >
      <SafeAreaView style={{ ...styles.globalMargin, flex: 1, marginTop: 100 }}>
        <ScrollView>
          <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
            <View style={{ alignItems: 'center' }}>
              <Image source={ require('../assets/img/miro.png') } />
              <TextInput
                style={ styles.input }
                placeholder="Correo electrónico"
                placeholderTextColor="gray"
                autoCapitalize="none"
                autoCorrect={ false }
                keyboardType="email-address"
                onChangeText={ (value) => onChange(value, 'email')}
              />
              <TextInput
                style={ styles.input }
                placeholder="Contraseña"
                placeholderTextColor="gray"
                autoCapitalize="none"
                autoCorrect={ false }
                secureTextEntry
                onChangeText={ (value) => onChange(value, 'password')}
              />
              <TouchableOpacity
                style={{ backgroundColor: colors.primary, borderRadius: 8, width: 120, alignItems: 'center', marginTop: 20, maxHeight: 48 }}
                onPress={ () => handleLogIn() }
              >
                {
                  ( isLoading ) ?
                    <ActivityIndicator style={{ paddingVertical: 14 }} color={'white'} />
                  :
                    <Text style={{ color: 'white', fontSize: 18, paddingHorizontal: 25, paddingVertical: 14 }}>
                      Ingresar
                    </Text>
                }
              </TouchableOpacity>
              <View style={{ marginTop: 20 }}>
                <Text style={{ color: colors.primary, fontSize: 16 }}>
                  ¿No tienes cuenta? {''}
                  <Text
                    style={{ textDecorationLine: 'underline' }}
                    onPress={ () => navigation.navigate('Registration' as never) }
                  >
                    Regístrate
                  </Text>
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
        <Footer />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
