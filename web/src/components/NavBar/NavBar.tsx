import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { getLogout } from '../../store/reducers/actionCreators';

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
