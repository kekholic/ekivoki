import React, { useState } from 'react';
import GameList from './GameList/GameList';
import NewGameSettings from './NewGameSettings/NewGameSettings';

export default function GameStart() {
  const [settings, setSettings] = useState(false);
  const [game, setGame] = useState(false);

  const onStartHandler = (): void => {
    setGame(false);
    setSettings(!settings);
  };

  const onGameListHandler = (): void => {
    setSettings(false);
    setGame(!game);
  };

  return (
    <>
      <div>GameStart</div>
      <div>
        <button type="submit" onClick={onStartHandler}>New game</button>
        <button type="submit" onClick={onGameListHandler}>Connect to the game</button>
        {settings && <NewGameSettings />}
        {game && <GameList />}
      </div>
    </>
  );
}
