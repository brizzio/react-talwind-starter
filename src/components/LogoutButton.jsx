import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '@material-tailwind/react';

const LogoutButton = () => {
  const { logout } = useAuth(); // Assuming you have a logout function in your Auth context
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout(); // Call the logout function from the Auth context
    navigate('/'); // Redirect to the login page after logging out
  };

  return (
    <Button 
      onClick={handleLogout} 
      className="bg-red-500 text-white hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800"
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
