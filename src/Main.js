import React, { Component } from 'react';
import './Main.css';

class Main extends Component {

  componentDidMount() {
    var mainTitle = document.querySelector(".main-text");
    var mainImg = document.querySelector(".main-img");

    // fade opacity on scroll
    function fadeOut(scrollY, el) {
      if (scrollY !== 0) {
        el.style.opacity = 1 - (scrollY/(window.innerHeight * 0.25));
        mainImg.style.opacity = 1 - (scrollY/(window.innerHeight * 0.75));
      }
    }

    window.addEventListener("DOMContentLoaded", scrollLoopAlbum, false);

    var yScrollPosition;
    var xScrollPosition;
    // var windowBottom;

    function scrollLoopAlbum() {
        yScrollPosition = window.scrollY;
        xScrollPosition = window.scrollX;
        // windowBottom = yScrollPosition + window.innerHeight;

        if (yScrollPosition <= window.innerHeight + 500) {
          fadeOut(yScrollPosition, mainTitle);
        }

        requestAnimationFrame(scrollLoopAlbum);
    }
  }

  render() {
    return (
      <div className="main-container">
        <div className="main-text animated">
          {'ICONIKAXRATED'}
        </div>
        <div className="main-img">
          <img
            className="main-img-content"
            src="https://scontent-lax3-1.cdninstagram.com/vp/8f5b6cea706f1c8a39f565d00309c17a/5BE91099/t51.2885-15/s750x750/sh0.08/e35/25007284_319547848544490_2540793139237486592_n.jpg" />
        </div>
      </div>
    );
  }
}

export default Main;
