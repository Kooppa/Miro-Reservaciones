import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ToastProvider } from 'react-native-toast-notifications';
import { AuthProvider } from './src/context/AuthContext';
import { Navigation } from './src/navigation/Navigation';

const AppState = ({ children }: { children: JSX.Element } ) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <ToastProvider>
        <AppState>
          <Navigation />
        </AppState>
      </ToastProvider>
    </NavigationContainer>
  );
};

export default App;
