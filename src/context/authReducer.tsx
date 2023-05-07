import { User } from '../interfaces/auth';
export interface AuthState {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  isLoggedIn: boolean,
  isLoading: boolean,
  errorMessage: string,
  token?: string,
  user?: User,
}

type AuthAction =
| { type: 'login', payload: { token: string, user: User } }
| { type: 'addError', payload: string }
| { type: 'setLoading', payload: boolean }
| { type: 'removeError' }
| { type: 'notAuthenticated' }
| { type: 'logout' }

export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
  switch (action.type) {
    case 'addError':
      return {
        ...state,
        status: 'not-authenticated',
        errorMessage: action.payload,
        user: undefined,
        token: undefined,
      };
    case 'setLoading':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'removeError':
      return {
        ...state,
        errorMessage: '',
      };
    case 'login':
      return {
        ...state,
        errorMessage: '',
        status: 'authenticated',
        token: action.payload.token,
        user: action.payload.user,
      };
    case 'logout':
    case 'notAuthenticated':
      return {
        ...state,
        status: 'not-authenticated',
        token: undefined,
        user: undefined,
      };
    default:
    return state;
  }
};
