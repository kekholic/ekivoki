import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return true;
  }
  return false;
};

function PublicRoutes() {
  const isAuth = useAuth();

  return isAuth ? <Navigate to="/game/start" /> : <Outlet />;
}

export default PublicRoutes;
