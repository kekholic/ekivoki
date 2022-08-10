import React from 'react';
import { NavLink } from 'react-router-dom';
import action from '../../store/actions/action';
import { useAppDispatch } from '../../store/store';

export default function NavBar() {
  const dispatch = useAppDispatch();
  const logoutHendler = () => {
    dispatch(action.logoutUser());
  };

  return (
    <>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/canvas">Paint</NavLink>
      <NavLink to="/personal">Personal</NavLink>
      <button type="submit" onClick={() => logoutHendler()}>logout</button>
    </>
  );
}
