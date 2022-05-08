import { createContext, useContext, useEffect, useReducer } from 'react';
import { authReducer } from '../reducers';

const initialAuthValue = {
  isAuth: !!JSON.parse(localStorage.getItem('user')) ,
  user: JSON.parse(localStorage.getItem('user')),
};

const AuthContext = createContext(initialAuthValue);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthValue);

  useEffect(() => {
    authDispatch({
      type: 'AUTH_SUCCESS',
      payload: JSON.parse(localStorage.getItem('user')),
    });
  }, []);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
