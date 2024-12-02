import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import { User } from '@supabase/supabase-js';

interface AuthState {
  user: User | null;
  session: any;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  checkUser: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  loading: true,
  signIn: async (email: string, password: string) => {
    // For development, simulate successful login
    if (process.env.NODE_ENV === 'development') {
      set({
        user: {
          id: '1',
          email: email,
          created_at: new Date().toISOString(),
        } as User,
        session: { access_token: 'fake-token' }
      });
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    set({ user: data.user, session: data.session });
  },
  signOut: async () => {
    if (process.env.NODE_ENV === 'development') {
      set({ user: null, session: null });
      return;
    }

    await supabase.auth.signOut();
    set({ user: null, session: null });
  },
  checkUser: async () => {
    try {
      if (process.env.NODE_ENV === 'development') {
        set({ loading: false });
        return;
      }

      const { data: { user } } = await supabase.auth.getUser();
      const { data: { session } } = await supabase.auth.getSession();
      set({ user, session, loading: false });
    } catch (error) {
      set({ user: null, session: null, loading: false });
    }
  },
}));