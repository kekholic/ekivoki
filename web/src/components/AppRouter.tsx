import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Auth from './Auth/Auth';
import PersonalPage from './PersonalPage/PersonalPage';
import Canvas from './Canvas/Canvas';
import ErrorPage from './ErrorPage/ErrorPage';

function AppRouter() {
  // const isAuth = useSelector((store: any) => store.user.isAuth);
  const isAuth = true;
  const privateRoutes = [
    { path: '/personal', element: <PersonalPage /> },
    { path: '/canvas', element: <Canvas /> },
  ];

  const publicRoutes = [
    { path: '/login', element: <Auth /> },
    { path: '/register', element: <Auth /> },
    { path: '/auth', element: <Auth /> },
  ];

  return (
    isAuth
      ? (
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              element={route.element}
              path={route.path}
              key={route.path}
            />
          ))}
          <Route path="*" element={<ErrorPage publicRoutes={publicRoutes} />} />
        </Routes>
      )
      : (
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              element={route.element}
              path={route.path}
              key={route.path}
            />
          ))}
          <Route path="*" element={<ErrorPage privateRoutes={privateRoutes} />} />
        </Routes>
      )

  );
}

export default AppRouter;
