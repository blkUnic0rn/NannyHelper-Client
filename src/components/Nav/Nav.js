import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/families'>Families</NavLink>
    <NavLink to='/create-family'>Create New Family</NavLink>
  </nav>
)

export default Nav
