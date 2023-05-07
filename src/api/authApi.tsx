import axios from 'axios';
import { API_URL } from '@env';

const authApi = axios.create({
  baseURL: `${ API_URL }/auth`,
});

export default authApi;
