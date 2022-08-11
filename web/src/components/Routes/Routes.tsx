import React from 'react';
import PersonalPage from '../PersonalPage/PersonalPage';
import Canvas from '../Canvas/Canvas.jsx';
import Registration from '../Auth/Registration/Registration';
import Login from '../Auth/Login/Login';
import GameStart from '../GameStart/GameStart';
import GameMain from '../GameMain/GameMain';

export const privateRoutes = [
  { path: '/game/start', element: <GameStart /> },
  { path: '/personal', element: <PersonalPage /> },
  { path: '/canvas', element: <Canvas /> },
  { path: '/logout' },
  { path: '/game/:id', element: <GameMain /> },
];

export const publicRoutes = [
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Registration /> },
];
