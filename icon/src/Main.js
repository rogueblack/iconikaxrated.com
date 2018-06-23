import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="main-text">
          {'iconikaxrated'}
        </div>
        <div className="main-text-sub">
          {'new album'}
        </div>
        <div className="main-img">
          <img
            src="https://scontent-lax3-1.cdninstagram.com/vp/8f5b6cea706f1c8a39f565d00309c17a/5BE91099/t51.2885-15/s750x750/sh0.08/e35/25007284_319547848544490_2540793139237486592_n.jpg" />
        </div>
      </div>
    );
  }
}

export default Main;
