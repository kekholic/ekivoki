import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css';
import Auth from './components/Auth/Auth';
import PersonalPage from './components/PersonalPage/PersonalPage';
import Canvas from './components/Canvas/Canvas';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/auth">Auth</NavLink>
        <NavLink to='/canvas'>Paint</NavLink>
        <NavLink to='/personal'>Personal</NavLink>
      </div>
      <Routes>
        <Route path={'/auth'} element={<Auth />} />
        <Route path={'/personal'} element={<PersonalPage />} />
        <Route path={'/canvas'} element={<Canvas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
