/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { ActivityIndicator, Image, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Footer } from '../components/Footer';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';
import { useShowToast } from '../hooks/useShowToast';
import { styles, colors } from '../theme/theme';
import { validatePassword, isValidEmail } from '../helpers/form';

export const RegistrationScreen = () => {

  const navigation = useNavigation();

  const { isLoading, register } = useContext(AuthContext);

  const { showWarningToast } = useShowToast();

  const { form, onChange } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    section: 0,
    password: '',
    confirmPassword: '',
  });

  const handleRegister = () => {
    if (form.firstName.trim() === '') {
      return showWarningToast('Ingresa tu nombre');
    }
    if (form.lastName.trim() === '') {
      return showWarningToast('Ingresa tu apellido(s)');
    }
    if (form.email.trim() === '') {
      return showWarningToast('Ingresa tu correo electrónico');
    }
    if (form.section === 0) {
      return showWarningToast('Selecciona tu sección');
    }
    if (form.password === '') {
      return showWarningToast('Ingresa tu contraseña');
    }
    if (form.confirmPassword === '') {
      return showWarningToast('Confirma tu contraseña');
    }
    if (!isValidEmail(form.email)) {
      return showWarningToast('Ingresa un correo electrónico válido');
    }
    if (!validatePassword(form.password)) {
      return showWarningToast('La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una minúscula, un número y un caracter especial');
    }
    if (form.password !== form.confirmPassword) {
      return showWarningToast('Las contraseñas no coinciden');
    }
    register(form);
  };

  return (
    <KeyboardAvoidingView behavior={ Platform.OS === 'ios' ? 'padding' : 'height' } style={{ flex: 1}} >
      <SafeAreaView style={{ ...styles.globalMargin, flex: 1, marginTop: 100 }}>
        <ScrollView>
          <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
            <View style={{ alignItems: 'center' }}>
              <Image source={ require('../assets/img/miro.png') } />
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, alignItems: 'center', marginRight: 5 }}>
                  <TextInput
                    style={ styles.input }
                    placeholder="Nombre(s)"
                    placeholderTextColor="gray"
                    autoCapitalize="words"
                    autoCorrect={ false }
                    onChangeText={ (value) => onChange(value, 'firstName')}
                  />
                </View>
                <View style={{ flex: 1, alignItems: 'center', marginLeft: 5 }}>
                  <TextInput
                    style={ styles.input }
                    placeholder="Apellido(s)"
                    placeholderTextColor="gray"
                    autoCapitalize="words"
                    autoCorrect={ false }
                    onChangeText={ (value) => onChange(value, 'lastName')}
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 5, alignItems: 'center', marginRight: 5 }}>
                  <TextInput
                    style={ styles.input }
                    placeholder="Correo electrónico"
                    placeholderTextColor="gray"
                    autoCapitalize="none"
                    autoCorrect={ false }
                    keyboardType="email-address"
                    onChangeText={ (value) => onChange(value, 'email')}
                  />
                </View>
                <View style={{ flex: 2, alignItems: 'center', marginLeft: 5 }}>
                  <TextInput
                    style={ styles.input }
                    placeholder="Sección"
                    placeholderTextColor="gray"
                    autoCapitalize="none"
                    autoCorrect={ false }
                    keyboardType="number-pad"
                    onChangeText={ (value) => onChange(value, 'section')}
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, alignItems: 'center', marginRight: 5 }}>
                  <TextInput
                    style={ styles.input }
                    placeholder="Contraseña"
                    placeholderTextColor="gray"
                    autoCapitalize="none"
                    autoCorrect={ false }
                    secureTextEntry
                    onChangeText={ (value) => onChange(value, 'password')}
                  />
                </View>
                <View style={{ flex: 1, alignItems: 'center', marginLeft: 5 }}>
                  <TextInput
                    style={ styles.input }
                    placeholder="Confirmar contraseña"
                    placeholderTextColor="gray"
                    autoCapitalize="none"
                    autoCorrect={ false }
                    secureTextEntry
                    onChangeText={ (value) => onChange(value, 'confirmPassword')}
                  />
                </View>
              </View>
              <TouchableOpacity
                style={{ backgroundColor: colors.primary, borderRadius: 8, width: 160, alignItems: 'center', marginTop: 20, maxHeight: 48 }}
                onPress={ () => handleRegister() }
              >
                {
                  ( isLoading ) ?
                    <ActivityIndicator style={{ paddingVertical: 14 }} color={'white'} />
                  :
                    <Text style={{ color: 'white', fontSize: 18, paddingHorizontal: 25, paddingVertical: 14 }}>
                      Crear cuenta
                    </Text>
                }
              </TouchableOpacity>
              <View style={{ marginTop: 20 }}>
                <Text style={{ color: colors.primary, fontSize: 16 }}>
                  ¿Ya tienes cuenta? {''}
                  <Text
                    style={{ textDecorationLine: 'underline' }}
                    onPress={ () => navigation.navigate('Login' as never) }
                  >
                    Ingresa
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
