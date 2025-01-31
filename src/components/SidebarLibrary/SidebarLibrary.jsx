import React from 'react';
import './SidebarLibrary.css';

const SidebarLibrary = () => {
  return (
    <div className='library'>
      <div className='library_content'>
        <button className='library_button'>
          <span className='fa fas fa-book'></span>
          <span>Sua Biblioteca</span>
        </button>
        <span className='fa fa-plus'></span>
      </div>

      <section className='section-playlist'>
        <div className='section-playlist__content'>
          <span className='text title'>Crie sua primeira playlist</span>
          <span className='text subtitle'>É fácil, vamos te ajudar</span>
          <button className='section-playlist__button'>
            <span>Criar playlist</span>
          </button>
        </div>
      </section>

      <div className='cookies'>
        <a href=''>Cookies</a>
      </div>

      <div className='languages'>
        <button className='languages__button'>
          <span className='fa fa-globe'></span>
          <span>Português do Brasil</span>
        </button>
      </div>
    </div>
  );
};

export default SidebarLibrary;
