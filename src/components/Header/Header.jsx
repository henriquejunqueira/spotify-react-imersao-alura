import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className='header__navigation'>
      <div className='navigation'>
        <button className='arrow-left'>
          <img src='./src/assets/icons/small-left.png' alt='Seta esquerda' />
        </button>
        <button className='arrow-right'>
          <img src='./src/assets/icons/small-right.png' alt='Seta direita' />
        </button>
      </div>

      <div className='header__search'>
        <img src='./src/assets/icons/search.png' alt='' />
        <input
          id='search-input'
          maxlength='800'
          autocorrect='off'
          autocapitalize='off'
          spellcheck='false'
          placeholder='O que você quer ouvir?'
          value=''
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
