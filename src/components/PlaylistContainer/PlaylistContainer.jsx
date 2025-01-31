import React from 'react';
import './PlaylistContainer.css';
// import imgCard1 from '../../assets/playlist/1.jpeg';
// import imgCard2 from '../../assets/playlist/2.png';
// import imgCard3 from '../../assets/playlist/3.jpeg';
// import imgCard4 from '../../assets/playlist/4.jpeg';
// import imgCard5 from '../../assets/playlist/5.jpeg';
// import imgCard6 from '../../assets/playlist/6.jpeg';
// import imgCard7 from '../../assets/playlist/7.jpeg';
// import imgCard8 from '../../assets/playlist/8.jpeg';
// import imgCard9 from '../../assets/playlist/9.jpeg';
// import imgCard10 from '../../assets/playlist/10.jpeg';
// import imgCard11 from '../../assets/playlist/11.jpeg';
// import imgCard12 from '../../assets/playlist/12.jpeg';
// import imgCard13 from '../../assets/playlist/13.jpeg';
// import imgCard14 from '../../assets/playlist/14.jpeg';
// import imgCard15 from '../../assets/playlist/15.jpeg';

const PlaylistContainer = ({ artists, showResults }) => {
  return (
    <div className='playlist-container'>
      {/* Exibe playlists se NÃO estiver pesquisando */}
      {!showResults && (
        <div id='result-playlists'>
          <div className='playlist'>
            <h1 id='greeting'>Boas vindas</h1>
            <h2 className='session'>Navegar por todas as seções</h2>
          </div>

          {/* Lista de Cards */}
          <div className='offer__scroll-container'>
            <div className='offer__list'>
              <section className='offer__list-item'>
                {[
                  { img: '1.jpeg', name: 'Boas festas' },
                  { img: '2.png', name: 'Feitos para você' },
                  { img: '3.jpeg', name: 'Lançamentos' },
                  { img: '4.jpeg', name: 'Creators' },
                  { img: '5.jpeg', name: 'Para treinar' },
                  { img: '6.jpeg', name: 'Podcasts' },
                  { img: '7.jpeg', name: 'Sertanejo' },
                  { img: '8.jpeg', name: 'Samba e pagode' },
                  { img: '9.jpeg', name: 'Funk' },
                  { img: '10.jpeg', name: 'MPB' },
                  { img: '11.jpeg', name: 'Rock' },
                  { img: '12.jpeg', name: 'Hip Hop' },
                  { img: '13.jpeg', name: 'Indie' },
                  { img: '14.jpeg', name: 'Relax' },
                  { img: '15.jpeg', name: 'Música Latina' },
                ].map((playlist, index) => (
                  <a href='#' key={index} className='cards'>
                    <div className={`cards card${index + 1}`}>
                      <img
                        src={`/assets/playlist/${playlist.img}`}
                        alt={playlist.name}
                      />
                      <span>{playlist.name}</span>
                    </div>
                  </a>
                ))}
              </section>
            </div>
          </div>
        </div>
      )}

      {/* Exibe playlists se NÃO estiver pesquisando */}
      {showResults && (
        <div id='result-artist'>
          <div className='grid-container'>
            {artists.length === 0 ? (
              <p>No artists found!</p>
            ) : (
              artists.map((artist, index) => (
                <div key={index} className='artist-card'>
                  <div className='card-img'>
                    <img
                      className='artist-img'
                      src={artist.urlImg || '/default-image.jpg'}
                      alt={artist.name}
                    />
                    <div className='play'>
                      <span className='fa fa-solid fa-play'></span>
                    </div>
                  </div>
                  <div className='card-text'>
                    <span className='artist-name'>{artist.name}</span>
                    <span className='artist-categorie'>Artista</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaylistContainer;
