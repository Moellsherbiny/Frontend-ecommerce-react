export interface User {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  password: string;
  token: string;
}
export interface AuthResponse {
   id: string;
  name: string;
  email?: string;
  address?: string;
  phone?: string;
  token: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  identifier: string;
  password: string;
}

export interface SignupCredentials {
  name: string;
  identifier: string;
  password: string;
}
