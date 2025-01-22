import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  role: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  checkUser: () => Promise<void>;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  loading: true,

  signIn: async (email: string, password: string) => {
    set({ loading: true });
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to sign in');
      }

      const data = await response.json();
      set({ user: data.user, token: data.token, loading: false });
      localStorage.setItem('auth_token', data.token);
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },

  signOut: async () => {
    localStorage.removeItem('auth_token');
    set({ user: null, token: null });
  },

  checkUser: async () => {
    try {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        set({ loading: false });
        return;
      }

      const response = await fetch(`${API_BASE_URL}/auth/me`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        localStorage.removeItem('auth_token');
        set({ user: null, token: null, loading: false });
        return;
      }

      const user = await response.json();
      set({ user, token, loading: false });
    } catch (error) {
      console.error('Error checking user:', error);
      set({ user: null, token: null, loading: false });
    }
  },
}));