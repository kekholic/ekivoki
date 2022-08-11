import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function GameStart() {
  return (
    <>
      <div>GameStart</div>
      <div>
        <Link to="/game/start/new">New game</Link>
        <Link to="/game/start/list">Connect to the game</Link>
      </div>
      <Outlet />
    </>
  );
}
