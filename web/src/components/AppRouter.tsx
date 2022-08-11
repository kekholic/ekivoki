import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
// import { useSelector } from 'react-redux';

import ErrorPage from './ErrorPage/ErrorPage';

import { privateRoutes, publicRoutes } from './Routes/Routes';

function AppRouter() {
  // let isAuth = useAppSelector((store) => store.user.isAuth);
  // useEffect(() => {
  //   if (localStorage.getItem('token')) isAuth = true;
  // }, []);
  // console.log(isAuth);
  const isAuth = true;
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
