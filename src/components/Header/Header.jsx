import React, { useState, useEffect } from 'react';
import './Header.css';
// import smallRight from '/assets/icons/small-right.png';
// import smallLeft from '/assets/icons/small-left.png';
// import search from '/assets/icons/search.png';

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className='header__navigation'>
      <div className='navigation'>
        <button className='arrow-left'>
          <img src='/assets/icons/small-left.png' alt='Seta esquerda' />
        </button>
        <button className='arrow-right'>
          <img src='/assets/icons/small-right.png' alt='Seta direita' />
        </button>
      </div>

      <div className='header__search'>
        <img src='/assets/icons/search.png' alt='' />
        <input
          id='search-input'
          maxLength='800' // Alterado de maxlength para maxLength
          autoCorrect='off'
          autoCapitalize='off' // Alterado de autocapitalize para autoCapitalize
          spellCheck='false'
          placeholder='O que você quer ouvir?'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o estado com o valor do input
        />
      </div>

      <div className='header__login'>
        <button className='subscribe'>Inscreva-se</button>
        <button className='login'>Entrar</button>
      </div>
    </nav>
  );
};

export default Header;
