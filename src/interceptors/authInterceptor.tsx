import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const onRequest = async(config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig<any>> => {
  const token = await AsyncStorage.getItem('token');
  config.headers.Authorization = `Bearer ${ token }`;
  return config;
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onErrorResponse = (error: any): any => {
  return Promise.reject(error);
};

export const setupInterceptors = (axiosInstance: any): void => {
  axiosInstance.interceptors.request.use(onRequest);
  axiosInstance.interceptors.response.use(onResponse, onErrorResponse);
};
