import React, { Component } from 'react';
import './App.css';
import './mediaStyles.css';
import Main from './Main.js';
import Album from './Album.js';
import Cluster from './Cluster.js';

class App extends Component {

  render() {
    let data = {
      albums: [
        {
          album_id: "album-0",
          title: "XRATED",
          image: '/images/albums/indecent-exposure/2018_06_09_02_31_Bjzq_BbFrsA34494530_636404740043526_2977778706958778368_n.jpg',

          cluster: [
            '/images/lib/1267203891578967859.jpg',
            '/images/2.jpg',
            '/images/3.jpg',
            '/images/alleyesonme.jpg',
            '/images/gonewiththewind.jpg',
            '/images/alleyesonme.jpg',
            '/images/eyeswideshut.jpg',
            '/images/forphlo.jpg',
            // '/images/thewicked.jpg',
          ],

          tracks: [
            {
              title: 'PUSSY GALORE',
              track_number: 'one',
              image: '/images/lib/1409005908399033469.jpg',
            },
            {
              title: 'WILD BITCH SHOW',
              track_number: 'two',
              image: '/images/lib/1440986053405947107.jpg',
            },
            {
              title: 'LATE NIGHTS',
              track_number: 'three',
              image: '/images/lib/1534376329642221129.jpg',
            },
            {
              title: 'SLANDER',
              track_number: 'four',
              image: '/images/lib/1551935225562879597.jpg',
            },
          ]
        }
      ]
    };

    return (
      <div className="app-container">
        <header className="app-header">
          <div className="header-menu">
          <div className="hamburger">
            <div className="burgerLine burgerLine1"></div>
            <div className="burgerLine burgerLine2"></div>
            <div className="burgerLine burgerLine3"></div>
          </div>
          </div>
        </header>
        <Main />
        {data.albums.map((album, i) => {
          return(
            <span key={"album_"+i}>
              <Cluster images={album.cluster} />
              <Album
                title={album.title}
                image={album.image}
                tracks={album.tracks}
              />
            </span>
          );
        })}
        <div className="app-footer">
          <div className="newsletter-btn">
            <span>Sign up for the newsletter</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
