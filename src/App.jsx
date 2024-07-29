import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import ThemeToggle from './components/ThemeToggle';
import LogoutButton from './components/LogoutButton';


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="p-4 bg-white text-black dark:bg-gray-800 dark:text-white">
          <nav className="mb-4 flex justify-between items-center">
            <div>
              <Link to="/" className="mr-4 text-blue-500 dark:text-blue-300">Home</Link>
              <Link to="/about" className="mr-4 text-blue-500 dark:text-blue-300">About</Link>
              <Link to="/login" className="text-blue-500 dark:text-blue-300">Login</Link>
            </div>
            <div className="flex items-center">
              <ThemeToggle />
              <LogoutButton /> {/* Include the Logout Button here */}
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<PublicRoute><Home /></PublicRoute>} />
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/app" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
            
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
