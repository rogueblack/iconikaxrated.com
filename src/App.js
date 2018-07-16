import React, { Component } from 'react';
import './App.css';
import Main from './Main.js';
import Album from './Album.js';
import Cluster from './Cluster.js';

class App extends Component {

  render() {
    let data = {
      albums: [
        {
          album_id: "album-0",
          title: "xrated",
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
              title: 'bitch',
              track_number: 0,
              image: '/images/albums/indecent-exposure/2018_05_31_05_34_32859164_2033770666862651_1035702814782783488_n.jpg',
            },
            {
              title: 'bitch1',
              track_number: 1,
              image: '/images/2.jpg',
            },
            {
              title: 'bitch2',
              track_number: 2,
              image: '/images/3.jpg',
            },
            {
              title: 'bitch3',
              track_number: 3,
              image: '/images/lib/1236706229276808394.jpg',
            },
          ]
        }
      ]
    };

    return (
      <div className="app-container">
        <header className="app-header">
          <div className="header-menu">
            <ul>
              <li className="">
                <a href=""></a>
              </li>
            </ul>
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
      </div>
    );
  }
}

export default App;
