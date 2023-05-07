import React, { createContext, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { AuthState, authReducer } from './authReducer';
import authApi from '../api/authApi';
import type { AuthResponse, LoginRequest, RegisterRequest, User } from '../interfaces/auth';

type AuthContextProps = {
  errorMessage: string;
  isLoggedIn: boolean;
  isLoading: boolean;
  token?: string;
  user?: User;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  logIn: (request: LoginRequest) => void;
  register: ( request: RegisterRequest ) => void;
  logOut: () => void;
  removeError: () => void;
}

export const authInitialState: AuthState  = {
  isLoggedIn: false,
  isLoading: false,
  errorMessage: '',
  status: 'checking',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {

  const [ authState, dispatch ] = useReducer(authReducer, authInitialState);

  const setLoading = ( newState: boolean ) => {
    dispatch({
      type: 'setLoading',
      payload: newState,
    });
  };

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async() => {
    try {
      const token = await AsyncStorage.getItem('token');
      if ( !token ) {
        dispatch({ type: 'notAuthenticated' });
        return;
      }
      const resp = await authApi.post<AuthResponse>(`/token/refresh/${ token }`);
      if ( resp.status !== 200 ) {
        dispatch({ type: 'notAuthenticated' });
        return;
      }
      await AsyncStorage.setItem('token', resp.data.token );
      dispatch({
        type: 'login',
        payload: {
          token: resp.data.token,
          user: resp.data.resident,
        },
      });
    } catch (error) {
      dispatch({ type: 'notAuthenticated' });
    }
  };

  const logIn = async({ email, password }: LoginRequest ) => {
    try {
      setLoading(true);
      const { data } = await authApi.post<AuthResponse>('', { email, password });
      dispatch({
        type: 'login',
        payload: {
          token: data.token,
          user: data.resident,
        },
      });
      await AsyncStorage.setItem('token', data.token );
    } catch (error) {
      if ( axios.isAxiosError( error ) ) {
        let errorMsg = '';
        const { detail } = error.response?.data as any || 'Ha ocurrido un error';
        if (detail === 'Bad credentials') {
          errorMsg = 'Correo electrónico o contraseña incorrectos';
        } else {
          errorMsg = detail;
        }
        dispatch({
          type: 'addError',
          payload: errorMsg,
        });
      } else {
        dispatch({
          type: 'addError',
          payload: 'Ha ocurrido un error',
        });
      }
    }
    setLoading(false);
    dispatch({ type: 'removeError'});
  };

  const register = async( request: RegisterRequest ) => {
    try {
      setLoading(true);
      const { data } = await authApi.post<AuthResponse>('/register', request);
      dispatch({
        type: 'login',
        payload: {
          token: data.token,
          user: data.resident,
        },
      });
      await AsyncStorage.setItem('token', data.token);
    } catch (error) {
      if ( axios.isAxiosError( error ) ) {
        const { detail } = error.response?.data as any;
        dispatch({
          type: 'addError',
          payload: detail || 'Ha ocurrido un error',
        });
      } else {
        dispatch({
          type: 'addError',
          payload: 'Ha ocurrido un error',
        });
      }
    }
    setLoading(false);
    dispatch({ type: 'removeError'});
  };

  const logOut = async() => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'logout' });
  };

  const removeError = () => {
    dispatch({ type: 'removeError' });
  };

  return (
    <AuthContext.Provider value={{
      ...authState,
      logIn,
      register,
      logOut,
      removeError,
    }}>
      { children }
    </AuthContext.Provider>
  );
};
