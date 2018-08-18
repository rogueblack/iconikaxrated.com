import React, { Component } from 'react';
import './Main.css';

class Main extends Component {

  componentDidMount() {
    var mainTitle = document.querySelector(".main-text");
    var mainImg = document.querySelector(".main-img");

    // fades opacity on scroll
    function fadeOut(scrollY) {
      
      // is the scroll position within the viewport (the element's visible display area)..?
      if (scrollY === 0)
        return;
      if (scrollY >= winHeight + 500)
        return;
      
      mainTitle.style.opacity = 1 - (scrollY / (winHeight * 0.45));

      // => take a fraction of the scroll-change..
      // => then add the fractional value onto the calculated value..  
      // => thus, what remains is the "eased" value, who's change is increasingly/decreasingly accelerated..
      var ease = (scrollY * 0.195);
      var opacity = 1 - (scrollY / (winHeight * 0.98));
      opacity = opacity * ease;
      mainImg.style.opacity = opacity;

      // => ease the y-position of the main image,
      // => so it scrolls at a slower rate than the text
      // var ease = 1 - (scrollY / 0.095); // => moves faster..
      var ease = (scrollY / -0.195);
      var yPos = (ease / (winHeight / 2));
      // var yPos = (winHeight / 2) / ease;
      yPos = Math.round(yPos * 100);
      console.info('yPos:', yPos);

      mainImg.style.transform = "translate3d(0, "+yPos+"px, -99px)";

    }

    var yScrollPosition;
    var winHeight;

    function mainScroll() {
      yScrollPosition = window.scrollY;
      winHeight = window.innerHeight;
      fadeOut(yScrollPosition);
      requestAnimationFrame(mainScroll);
    }


    window.addEventListener("DOMContentLoaded", mainScroll, false);
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
