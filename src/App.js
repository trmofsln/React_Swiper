import React from "react";
import 'swiper/swiper-bundle.css';
// import 'swiper/css/swiper.css'
import './App.css'
// import Swiper from 'swiper';
import Swiper from 'swiper/bundle';
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';
// import 'swiper/swiper.scss';


class App extends React.Component {

  componentDidMount() {
    this.swiper = new Swiper('.swiper-container', {
      effect: 'cube',
      grabCursor: true,
      loop: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      // pagination: {
      //   el: '.swiper-pagination',
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    // this.swiper = new Swiper('.swiper-container', {
    //   effect: 'flip',
    //   grabCursor: true,
    //   loop: true,
    //   pagination: {
    //     el: '.swiper-pagination',
    //   },
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    // });

  }

  render() {
    return (
      <React.Fragment>
        <div class="swiper-container">
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              
                <img className="imagecss" src="https://www.anniesannuals.com/signs/b%20-%20c/images/celosia_argentea_cristata_kc.jpg" alt="image1" />
                <div className="story-box">
                <h3> Raman Mishra </h3>
                <h5> Done course of MERN </h5>
              </div>
            </div>                                                                                                                                             

            <div class="swiper-slide">
              <img className="imagecss" src="https://i.pinimg.com/originals/d1/00/2a/d1002a09cb4a04c3f08091454183508c.jpg" alt="image2" />
              <div className="story-box">
                <h3> Raman Mishra </h3>
                <h5> Done course of MERN </h5>
              </div>
            </div>

            <div class="swiper-slide">
              <img className="imagecss" src="https://i.pinimg.com/originals/d1/00/2a/d1002a09cb4a04c3f08091454183508c.jpg" alt="image3" />
              <div className="story-box">
                <h3> Raman Mishra </h3>
                <h5> Done course of MERN </h5>
              </div>
            </div>

            <div class="swiper-slide">
              <img className="imagecss" src="https://i.pinimg.com/originals/2a/bf/46/2abf46e52691cabb7f3f478fd4c4edbf.jpg" alt="image4" />
              <div className="story-box">
                <h3> Raman Mishra </h3>
                <h5> Done course of MERN </h5>
              </div>
            </div>

            <div class="swiper-slide">
              <img className="imagecss" src="https://i.pinimg.com/originals/d0/c2/bb/d0c2bb2b15ed04398f1af494b76a2028.jpg" alt="image5" />
              <div className="story-box">
                <h3> Raman Mishra </h3>
                <h5> Done course of MERN </h5>
              </div>
            </div>

            <div class="swiper-slide">
              <img className="imagecss" src="https://i.pinimg.com/originals/36/0e/d3/360ed32eba862ea57a93d8b318c1712f.jpg" alt="image6" />
              <div className="story-box">
                <h3> Raman Mishra </h3>
                <h5> Done course of MERN </h5>
              </div>
            </div>

            <div class="swiper-slide">
              <img className="imagecss" src="https://s3.amazonaws.com/cdn0.dutchbulbs.com/images/500/00197.jpg" alt="image4" />
              <div className="story-box">
                <h3> Raman Mishra </h3>
                <h5> Done course of MERN </h5>
              </div>
            </div>

          </div>

          <div class="swiper-pagination"></div>

          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </React.Fragment>
    )
  }

};

export default App;
