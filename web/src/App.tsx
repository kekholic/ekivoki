/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import {
  BrowserRouter, NavLink, Route, Routes,
} from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import PersonalPage from './components/PersonalPage/PersonalPage';
import Canvas from './components/Canvas/Canvas';

function App() {
  return (
    <BrowserRouter>
    <header>
      <div>
        <NavLink to="/auth">Auth</NavLink>
        < br/>
        <NavLink to='/canvas'>Paint</NavLink>
        < br/>
        <NavLink to='/personal'>Personal</NavLink>
      </div>
    </header>
    <main>
      <Routes>
        <Route path={'/auth'} element={<Auth />} />
        <Route path={'/personal'} element={<PersonalPage />} />
        <Route path={'/canvas'} element={<Canvas />} />
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
