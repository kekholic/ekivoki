import React from 'react';
import { Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux';
import Auth from "../components/Auth/Auth";
import PersonalPage from './PersonalPage/PersonalPage';
import Canvas from './Canvas/Canvas';

const AppRouter = () => {
  // const isAuth = useSelector((store: any) => store.user.isAuth);
  const isAuth = true;

  return (
    isAuth
      ?
      <Routes>
        <Route path='/personal' element={<PersonalPage />} />
        <Route path='/canvas' element={<Canvas />} />
        <Route path='*' element={<PersonalPage />} />
      </Routes> :
      <Routes>
        <Route path='/log' element={<Auth />} />
        <Route path='/reg' element={<Auth />} />
        <Route path='*' element={<Auth />} />
      </Routes>

  );
};

export default AppRouter;