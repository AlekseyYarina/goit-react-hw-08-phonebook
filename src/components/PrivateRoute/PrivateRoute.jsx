import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthIsLoggedIn } from 'redux-state/auth/authSelectors';

const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
