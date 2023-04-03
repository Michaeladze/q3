import React from 'react';
import './AppHeader.css';
import { NavLink } from 'react-router-dom';

const AppHeader = () => {
  return (
    <header className='app-header'>
      <NavLink to='/' className="app-header__name">TAKTIX</NavLink>
    </header>
  );
};

export default AppHeader;
