import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

function ProtectedRoutes() {
  const { isAuth } = useAppSelector((store) => store.user);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
