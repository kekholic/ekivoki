import React
, {

} //  ,{ useEffect, useState }
  from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
// import { useSelector } from 'react-redux';


function AppRouter() {

  // const isAuth = useSelector((store: any) => store.user.isAuth);
  const isAuth = true;

  //const isAuth = localStorage.getItem('token');
  //console.log(isAuth);

  const privateRoutes = [
    { path: '/personal', element: <PersonalPage /> },
    { path: '/canvas', element: <Canvas /> },
    { path: '/logout' },
  ];

import ErrorPage from './ErrorPage/ErrorPage';

import { privateRoutes, publicRoutes } from './Routes/Routes';

function AppRouter() {
  const isAuth = useAppSelector((store) => store.user.isAuth);
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
