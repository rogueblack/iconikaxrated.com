import React, { Component } from 'react';
import './Cluster.css';
import $ from 'jquery';


class Cluster extends Component {

  componentDidMount() {
    var viewLayer = document.querySelector(".view-layer");

    function setTranslate(yPos, zPos, el) {
      var zpos = zPos / 10;
      el.style.transform = "translate3d(0,0px,"+ zpos +"em)";
    }

    var yScrollPosition;
    var clusterCont;

    // => this value is related to the css prop:  .mb-active{height}
    const maxDistance = 11200;
    // const maxDistance = 10000;

    function scrollLoop () {
        yScrollPosition = window.scrollY;

        // todo: what if there are multiple .cluster-container elements..?
        //    .. need a way to determine target container element 
        clusterCont = $('.cluster-container').offset().top+50;

        if (yScrollPosition >= clusterCont-1 && yScrollPosition <= (maxDistance + 11000)) {
        
          $('.mb-active').addClass('mb-fixed');

          var x = (yScrollPosition - clusterCont);
          var y = (yScrollPosition - clusterCont);
          setTranslate(x, y, viewLayer);
        
        } else {
          $('.mb-active').removeClass('mb-fixed');
        
        }

        requestAnimationFrame(scrollLoop);
    }

    window.addEventListener("DOMContentLoaded", scrollLoop, false);
  }

  render() {

    const images = this.props.images;

    return (
      <div className="cluster-container">
        <section className="mb-active">
          <div id="block-views-all-content-all-content-block" className="block block--views block--views-all-content-all-content-block delta--all-content-all-content-block">
            <div className="block__content">
              <div className="view view-all-content view-id-all_content view-display-id-all_content_block moodboard view-dom-id-4f395e837186ffdf1e7ac504704f936e view-bolero view-style--row-unwrapped views-view-mode-listing jquery-once-2-processed on-screen">
            	  <div className="view-layer">

                  {images.map((image, i) =>
                    <img
                      id={"img-" + i}
                      key={'track_' + i}
                      className="cluster-img"
                      src={image}
                    />
                  )}
              	</div>
            	</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Cluster;
