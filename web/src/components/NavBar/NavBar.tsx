import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

export default function NavBar({ }: Props) {
  return (
    <header>
      <NavLink to="/auth">Auth</NavLink>
      <NavLink to='/canvas'>Paint</NavLink>
      <NavLink to='/personal'>Personal</NavLink>
    </header>
  )
}