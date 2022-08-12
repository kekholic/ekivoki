import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getInit } from '../store/reducers/actionCreators';

import ErrorPage from './ErrorPage/ErrorPage';

import { privateRoutes, publicRoutes } from './Routes/Routes';

function AppRouter() {
  const isAuth = useAppSelector((user) => user.user.isAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(getInit());
    }
  }, []);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route element={route.element} path={route.path} key={route.path} />
      ))}
      <Route path='*' element={<ErrorPage publicRoutes={publicRoutes} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route element={route.element} path={route.path} key={route.path} />
      ))}
      <Route path='*' element={<ErrorPage privateRoutes={privateRoutes} />} />
    </Routes>
  );
}

export default AppRouter;
