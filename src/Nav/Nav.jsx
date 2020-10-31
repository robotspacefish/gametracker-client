import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <NavLink exact to='/login'>Log In</NavLink>
      <NavLink exact to='/signup'>Sign Up</NavLink>
    </nav>
  );
}

export default Nav;