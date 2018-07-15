import React, { Component } from 'react';
import './Cluster.css';
import $ from 'jquery';


class Cluster extends Component {

  componentDidMount() {
    var viewLayer = document.querySelector(".view-layer");
    var contentImg1 = document.querySelector("#img-1");
    var contentImg2 = document.querySelector("#img-2");
    var contentImg3 = document.querySelector("#img-3");
    var contentImg4 = document.querySelector("#img-4");
    var contentImg5 = document.querySelector("#img-5");
    var contentImg6 = document.querySelector("#img-6");
    var contentImg7 = document.querySelector("#img-7");
    var contentImg8 = document.querySelector("#img-8");

    function setTranslate(yPos, zPos, el) {
      el.style.transform = "translate3d(0,0px,"+ zPos/10+"em)";
    }

    window.addEventListener("DOMContentLoaded", scrollLoop, false);

    var yScrollPosition;
    var clusterCont;

    // this value is related to the css prop:  .mb-active{height}
    const maxDistance = 14200;


    function scrollLoop() {
        yScrollPosition = window.scrollY;
        clusterCont = $('.cluster-container').offset().top;

        if (yScrollPosition >= clusterCont-1 && yScrollPosition <= maxDistance) {
          $('.mb-active').addClass('mb-fixed');
          setTranslate((yScrollPosition - clusterCont), (yScrollPosition - clusterCont), viewLayer);
          // setTranslate((yScrollPosition - clusterCont), (yScrollPosition - clusterCont), contentImg1);
          // setTranslate((yScrollPosition - clusterCont), (yScrollPosition - clusterCont), contentImg2);
          // setTranslate((yScrollPosition - clusterCont), (yScrollPosition - clusterCont), contentImg3);
          // setTranslate((yScrollPosition - clusterCont), (yScrollPosition - clusterCont), contentImg4);
        } else {
          $('.mb-active').removeClass('mb-fixed');
        }

        requestAnimationFrame(scrollLoop);
    }
  }

  render() {
    return (
      <div className="cluster-container">
        <section className="mb-active">
          <div id="block-views-all-content-all-content-block" className="block block--views block--views-all-content-all-content-block delta--all-content-all-content-block">
            <div className="block__content">
              <div data-view-id="all_content" data-view-display-id="all_content_block" data-view-name="All Content" data-dom-id="4f395e837186ffdf1e7ac504704f936e" className="view view-all-content view-id-all_content view-display-id-all_content_block moodboard view-dom-id-4f395e837186ffdf1e7ac504704f936e view-bolero view-style--row-unwrapped views-view-mode-listing jquery-once-2-processed on-screen">
            	  <div className="view-layer">
                  <img id="img-1" className="cluster-img" src="/images/lib/1267203891578967859.jpg" />
                  <img id="img-2" className="cluster-img" src="/images/2.jpg" />
                  <img id="img-3" className="cluster-img" src="/images/3.jpg" />
                  <img id="img-4" className="cluster-img" src="/images/alleyesonme.jpg" />
                  <img id="img-5" className="cluster-img" src="/images/lib/2018_06_14_04_08_Bj_bl5QlUXx33835066_1964685623562756_6985455241097379840_n.jpg" />
                  <img id="img-6" className="cluster-img" src="/images/lib/2018_06_21_01_59_34982590_1820864981270253_6160271274825220096_n.jpg" />
                  <img id="img-7" className="cluster-img" src="/images/lib/1236706229276808394.jpg" />
                  <img id="img-8" className="cluster-img" src="/images/lib/1242698258343434001.jpg" />
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
