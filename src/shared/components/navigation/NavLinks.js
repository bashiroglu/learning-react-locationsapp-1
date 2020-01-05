import React from 'react';
import { NavLink } from 'react-router-dom';/* this is the same with Link
but some addtional nav item need funct in navigation */

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>ALL USERS</NavLink>
    </li>
    <li>
      <NavLink to="/u1/places">MY PLACES</NavLink>
    </li>
    <li>
      <NavLink to="/places/new">ADD PLACE</NavLink>
    </li>
    <li>
      <NavLink to="/auth">AUTHENTICATE</NavLink>
    </li>
  </ul>
};

export default NavLinks;