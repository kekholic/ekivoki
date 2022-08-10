import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import AppRouter from './components/AppRouter';

function App() {

  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <main>
        <AppRouter />
      </main>
    </BrowserRouter>
  );
}

export default App;
