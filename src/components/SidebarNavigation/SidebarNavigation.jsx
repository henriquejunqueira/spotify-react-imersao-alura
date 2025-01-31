import React from 'react';
import './SidebarNavigation.css';
// import Logo from '/assets/icons/logo-spotify.png';

const SidebarNavigation = () => {
  return (
    <nav className='sidebar__navigation'>
      <div className='logo'>
        <a href=''>
          <img src='/assets/icons/logo-spotify.png' alt='Logo do Spotify' />
        </a>
      </div>
      <ul>
        <li>
          <a href=''>
            <span className='fa fa-home'></span>
            <span>Início</span>
          </a>
        </li>
        <li>
          <a href=''>
            <span className='fa fa-search'></span>
            <span>Buscar</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarNavigation;
