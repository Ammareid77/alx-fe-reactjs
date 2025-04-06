// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to login or home if not authenticated
    return <Navigate to="/" />;
  }

  return children; // Render the protected component if authenticated
};

export default ProtectedRoute;