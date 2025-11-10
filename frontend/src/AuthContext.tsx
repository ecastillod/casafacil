import React, { createContext, useContext, useState, useEffect } from 'react';

// Define el tipo del contexto de autenticación
interface AuthContextType {
  user: { nombreCompleto: string, id: string } | null;
  login: (token: string, user: { nombreCompleto: string, id: string }) => void;
  logout: () => void;
  getToken: () => string | null;
}

// Crea el contexto con un valor por defecto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define el proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<{ nombreCompleto: string, id: string } | null>(null);

  // Cargar usuario al iniciar la aplicación
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (token: string, userData: { nombreCompleto: string, id: string }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  const getToken = () => {
    return localStorage.getItem('token');
  };

  const value = { user, login, logout, getToken };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook personalizado para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};