import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null, // This is the userId that we get from the backend
  token: null,
  login: () => {},
  logout: () => {}
});
