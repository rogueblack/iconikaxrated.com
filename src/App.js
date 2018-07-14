import React, { Component } from 'react';
import './App.css';
import Main from './Main.js';
import Album from './Album.js';
import Cluster from './Cluster.js';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <header className="app-header">
          <div className="header-brand">menu</div>
        </header>
        <Main />
        <Cluster />
        <Album />
      </div>
    );
  }
}

export default App;