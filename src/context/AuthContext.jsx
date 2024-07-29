import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (userData) => {
    setUser(userData);
    setIsAuthenticated(true)
    // You can also save user data to local storage or perform other actions
  };

  const logout = async () => {
    setUser(null);
    setIsAuthenticated(false)
    // Clear user data from local storage or perform other actions
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

