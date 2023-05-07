import axios from 'axios';
import { API_URL } from '@env';
import { setupInterceptors } from '../interceptors/authInterceptor';

const reserveApi = axios.create({
  baseURL: `${ API_URL }/reserve`,
});

setupInterceptors(reserveApi);

export default reserveApi;
