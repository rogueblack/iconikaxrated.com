import React, { Component } from 'react';
import './Album.css';
import $ from 'jquery';

class Album extends Component {

  componentDidMount() {
    var albumTitle = document.querySelector(".album-title");
    var coverImg = document.querySelector(".cover-img");

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d("+xPos+"px,"+yPos+"px,0)";
    }

    //fade opacity as coverImg scrolls
    function fadeIn(windowBottom, albumStart, el) {
      var difference = windowBottom - albumStart;
      el.style.opacity = (difference/(window.innerHeight*1.15));
    }

    //bring to center and make full opacity
    function slideIn(el) {
      el.style.transform = "translateX(0%)";
      el.style.opacity = "1";
    }

    //Push out the opposite direction and fade opacity
    function slideOut(even, el) {
      var newX;
      if (even) {
        newX = -150;
      } else {
        newX = 150;
      }
      el.style.transform = "translateX("+newX+"%)";
      el.style.opacity = "0";
    }

    window.addEventListener("DOMContentLoaded", scrollLoopAlbum, false);

    var yScrollPosition;
    var xScrollPosition;
    var albumCont;
    var windowBottom


    function scrollLoopAlbum() {
        yScrollPosition = window.scrollY;
        xScrollPosition = window.scrollX;
        albumCont = $('.album-container').offset().top;
        windowBottom = yScrollPosition + window.innerHeight;

        // - 500 for a headstart
        if (windowBottom >= albumCont-500) {

          //Parallax album title
          setTranslate(0, (yScrollPosition - albumCont) * -.6, albumTitle);
          //fade in cover img
          fadeIn(windowBottom, albumCont, coverImg);

          $(".track-item").each(function(i) {
            //top is visible -> slide in
            //top is outside bounds -> slide out
            if ($(this).offset().top < windowBottom && $(this).offset().top > yScrollPosition) {
              slideIn(this);
            } else if ($(this).offset().top < yScrollPosition) {
              slideOut(i % 2, this);
            }
          });
        }

        requestAnimationFrame(scrollLoopAlbum);
    }
  }

  render() {
    return (
      <div className="album-container">
        <div className="cover-img-container">
          <div className="cover-img"></div>
          <div className="album-title">xrated</div>
        </div>
        <div className="tracks-container">
          <div className="track-item">
            <div className="track-img"></div>
            <div className="track-title">
              WILD BITCH SHOW
            </div>
          </div>
          <div className="track-item">
            <div className="track-img"></div>
            <div className="track-title">
              WILD BITCH SHOW
            </div>
          </div>
          <div className="track-item">
            <div className="track-img"></div>
            <div className="track-title">
              WILD BITCH SHOW
            </div>
          </div>
          <div className="track-item">
            <div className="track-img"></div>
            <div className="track-title">
              WILD BITCH SHOW
            </div>
          </div>
          <div className="track-item">
            <div className="track-img"></div>
            <div className="track-title">
              WILD BITCH SHOW
            </div>
          </div>
          <div className="track-item">
            <div className="track-img"></div>
            <div className="track-title">
              WILD BITCH SHOW
            </div>
          </div>
          <div className="track-item">
            <div className="track-img"></div>
            <div className="track-title">
              WILD BITCH SHOW
            </div>
          </div>
          <div className="track-item">
            <div className="track-img"></div>
            <div className="track-title">
              WILD BITCH SHOW
            </div>
          </div>
          <div className="track-item">
            <div className="track-img"></div>
            <div className="track-title">
              WILD BITCH SHOW
            </div>
          </div>
          <div className="track-item">
            <div className="track-img"></div>
            <div className="track-title">
              WILD BITCH SHOW
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Album;
