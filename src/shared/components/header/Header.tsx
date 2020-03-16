import React from 'react';
import Nav from '../nav/Nav';
import './Header.scss';

const Header = () => {
  return (
    <div className="max-width-page">
      <header>
        <Nav />
      </header>
    </div>
  );
};

export default Header;
