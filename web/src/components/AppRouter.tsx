import React
  //  ,{ useEffect, useState }
  from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import PersonalPage from './PersonalPage/PersonalPage';
import Canvas from './Canvas/Canvas.jsx';
import ErrorPage from './ErrorPage/ErrorPage';
import Registration from './Auth/Registration/Registration';
import Login from './Auth/Login/Login';

function AppRouter() {
  // const isAuth = useSelector((store: any) => store.user.isAuth);
  const isAuth = false;
  const privateRoutes = [
    { path: '/personal', element: <PersonalPage /> },
    { path: '/canvas', element: <Canvas /> },
    { path: '/logout' },
  ];

  const publicRoutes = [
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Registration /> },
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
