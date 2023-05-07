import React from 'react';
import Icon from 'react-native-ionicons';
import { useToast } from 'react-native-toast-notifications';
import { ToastOptions } from 'react-native-toast-notifications/lib/typescript/toast';

const toastOptions: ToastOptions = {
  placement: 'bottom',
  duration: 2000,
  icon: <Icon name="alert" color="white" size={ 20 } />,
  style: { width: '100%' },
  animationType: 'slide-in',
};

export const useShowToast = () => {

  const toast = useToast();

  const showWarningToast = ( message: string ) => {
    toast.show(message, toastOptions);
  };

  return {
    showWarningToast,
  };
};
