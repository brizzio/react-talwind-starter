import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/app');
  };

  return (
    <div className="text-center text-2xl">
      <h1>Login Page</h1>
      <button onClick={handleLogin} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Login</button>
    </div>
  );
};

export default Login;