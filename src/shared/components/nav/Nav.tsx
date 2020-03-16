import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/sign-in" activeClassName="nav-link nav-link-active">
            Sign In
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/sign-up" activeClassName="nav-link nav-link-active">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
