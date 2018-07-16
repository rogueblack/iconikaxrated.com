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
        }

        requestAnimationFrame(scrollLoopAlbum);
    }

    $(".track-item").hover(function(){
      $('.track-title', this).addClass("appear");
      }, function(){
      $('.track-title', this).removeClass("appear");
    });
  }

  constructor(props) {
    super(props);
  }

  render() {
    const albumTitle = this.props.title;
    const albumImage = 'url('+ this.props.image +')';
    const tracks = this.props.tracks;

    return (
      <div className="album-container">
        <div className="cover-img-container">
          <div className="cover-img"
            style={{ backgroundImage: albumImage }}></div>
          <div className="album-title">{albumTitle}</div>
        </div>
        <div className="tracks-container">

          {tracks.map((track, i) =>
            <div className="track-item" key={'track_' + i}>
              <div className="track-img"
                style={{ backgroundImage: 'url('+ track.image +')' }}></div>
              <div className="track-title">
                <span>
                  {track.title}
                </span>
              </div>
            </div>
          )}

        </div>
      </div>
    );
  }
}

export default Album;
