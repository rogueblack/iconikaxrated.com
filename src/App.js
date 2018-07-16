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
            '/images/lib/2018_06_14_04_08_Bj_bl5QlUXx33835066_1964685623562756_6985455241097379840_n.jpg',
            '/images/lib/2018_06_21_01_59_34982590_1820864981270253_6160271274825220096_n.jpg',
            '/images/lib/1236706229276808394.jpg',
            '/images/lib/1242698258343434001.jpg',
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
