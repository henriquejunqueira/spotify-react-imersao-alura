import React, { useState, useEffect } from 'react';
import './MainContainer.css';
import Header from '../Header/Header';
import PlaylistContainer from '../PlaylistContainer/PlaylistContainer';

const MainContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [artists, setArtists] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setArtists([]);
      setShowResults(false);
    } else {
      requestApi(searchTerm);
      setShowResults(true);
    }
  }, [searchTerm]); // O efeito é acionado toda vez que searchTerm muda

  const requestApi = async (term) => {
    const url = `http://localhost:3001/artists?name_like=${term}`;

    try {
      const response = await fetch(url);
      const result = await response.json();
      setArtists(result);
    } catch (error) {
      console.error(`Erro ao buscar artistas: ${error}`);
    }
  };

  return (
    <main>
      <div className='main-container'>
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <PlaylistContainer artists={artists} showResults={showResults} />
      </div>
    </main>
  );
};

export default MainContainer;
