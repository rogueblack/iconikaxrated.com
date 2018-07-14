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
            '/images/Woahman.jpg',
            '/images/2.jpg',
            '/images/3.jpg',
            '/images/alleyesonme.jpg',
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
          <div className="header-brand">menu</div>
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
