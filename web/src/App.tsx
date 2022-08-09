import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Auth from './components/Auth/Auth';
import PersonalPage from './components/PersonalPage/PersonalPage';
import Canvas from './components/Canvas/Canvas';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={'/auth'} element={<Auth />} />
        <Route path={'/personal'} element={<PersonalPage />} />
        <Route path={'/canvas'} element={<Canvas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
