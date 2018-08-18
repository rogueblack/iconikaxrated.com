import React, { Component } from 'react';
import './Album.css';
import $ from 'jquery';

class Album extends Component {

  componentDidMount() {
    var albumTitle = document.querySelector(".album-title");
    var albumText = document.querySelector(".album-text");
    var albumButtons = document.querySelector(".album-buttons");

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d("+xPos+"px,"+yPos+"px,0)";
    }


    window.addEventListener("DOMContentLoaded", scrollLoopAlbum, false);

    var yScrollPosition;
    var albumCont;
    var windowBottom


    function scrollLoopAlbum() {
        yScrollPosition = window.scrollY;
        albumCont = $('.album-container').offset().top;
        windowBottom = yScrollPosition + window.innerHeight;

        const mq = window.matchMedia( "(max-width: 800px)" );


        // - 500 for a headstart
        if (windowBottom >= albumCont-100) {

          //Parallax album title
          setTranslate(0, (yScrollPosition - albumCont) * -.4, albumTitle);
          setTranslate(0, (yScrollPosition - albumCont) * -1, albumText);
          setTranslate(0, (yScrollPosition - albumCont) * -1, albumButtons);

          //mobile only
          if (mq.matches) {
            $(".track-item").each(function(i) {
              //is visible -> show track title
              if ($(this).offset().top < windowBottom && $(this).offset().top > yScrollPosition) {
                $('.track-title', this).addClass("appear");
              } else {
                $('.track-title', this).removeClass("appear");
              }
            });
          }
        }

        requestAnimationFrame(scrollLoopAlbum);
    }

    $(".track-item").hover (
      function () {
        $('.track-title', this).addClass ( "appear" );
      },
      function () {
        $('.track-title', this).removeClass ( "appear" );
      }
    );

  }


  render() {
    const albumTitle = this.props.title;
    const albumImage = 'url('+ this.props.image +')';
    const tracks = this.props.tracks;

    return (
      <div className="album-container">
        <div className="album-title">{albumTitle}</div>
        <div className="album-text">album release</div>
        <div className="album-buttons">
          <a href="https://geo.itunes.apple.com/us/album/indecent-exposure/1246997463?mt=1&app=music" style={{ display: "inline-block", overflow: "hidden", background: "url(https://linkmaker.itunes.apple.com/assets/shared/badges/en-us/music-lrg.svg) no-repeat", width: "158px", height: "45px", backgroundSize: "contain" }}></a>
          <a href="https://open.spotify.com/album/6zt1eZkJGi0RBSrVUdj4ia?si=UaoOj95mRaimpcBiiGBUHw" style={{ display: "inline-block", overflow: "hidden", background: "url(/images/spotifyBadge.png) no-repeat", width: "158px", height: "60px", backgroundSize: "contain" }}></a>
          <a href="https://geo.itunes.apple.com/us/album/indecent-exposure/1246997463?app=itunes" style={{ display:  "inline-block", overflow: "hidden", background: "url(https://linkmaker.itunes.apple.com/assets/shared/badges/en-us/itunes-lrg.svg) no-repeat", width: "140px", height: "41px", backgroundSize: "contain" }}></a>
        </div>
        <div className="tracks-container">

          {tracks.map((track, i) =>
            <div className="track-item" key={'track_' + i}>
              <div className="track-img"
                style={{ backgroundImage: 'url('+ track.image +')' }}></div>
              <div className={i % 2 ? 'track-text-container right' : 'track-text-container'}>
                <span className="track-title">
                  {track.title}
                </span>
                <span className="track-num">
                  TRACK NUMBER {track.track_number}
                </span>
                <span className="track-text">
                  Composition by Pete Werner Beyoncé Knowles Rich Harrison Eugene Record Adam Willis Ashley Abram Shawn Carter Scott Thomas (2) Jeff McCartney
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
