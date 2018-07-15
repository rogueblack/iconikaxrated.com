import React, { Component } from 'react';
import './App.css';
import Main from './Main.js';
import Album from './Album.js';
import Cluster from './Cluster.js';

class App extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    let data = {
      albums: [
        {
          album_id: "album-0",
          title: "xrated",
          image: '',

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
              image: '',
            }
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
            <span>
              <Cluster key={"cluster_"+i} images={album.cluster} />
              <Album
                key={"album_"+i}
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
