import React, { useState } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  isAdmin: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);
  const userIsLoggedIn = !!token;
  const loginHandler = (token, isAdmin = false) => {
    setToken(token);
    setIsAdmin(isAdmin);
  };
  const logoutHandler = () => {
    setToken(null);
    setIsAdmin(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    isAdmin: isAdmin,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
