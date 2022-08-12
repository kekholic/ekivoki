import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import MainRoutes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <NavBar />
      </header>
      <main className="main">

        <MainRoutes />

      </main>
    </BrowserRouter>
  );
}

export default App;
