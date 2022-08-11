import React from 'react';
import { NavLink } from 'react-router-dom';
import { getLogout } from '../../store/reducers/actionCreators';
import { useAppDispatch } from '../../store/store';

export default function NavBar() {
  const dispatch = useAppDispatch();
  const logoutHendler = () => {
    dispatch(getLogout());
  };

  return (
    <>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/canvas">Paint</NavLink>
      <NavLink to="/personal">Personal</NavLink>
      <NavLink to="/game/start">game start</NavLink>
      <button type="submit" onClick={() => logoutHendler()}>logout</button>
    </>
  );
}
