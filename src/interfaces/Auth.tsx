export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  section: number;
  role: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  section: number;
}

export interface AuthResponse {
  token: string;
  resident: User;
}
