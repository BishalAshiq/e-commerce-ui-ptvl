import "./BrowserCatagories.css";
import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../images/img-Tshirt.jpg";
import img2 from "../../images/img-panjabi.jpg";
import img3 from "../../images/img-Women-dress.jpg";
import img4 from "../../images/img-Women-sandle.jpg";
import img5 from "../../images/img-Tshirt2.jpg";
import img6 from "../../images/img-neckless.jpg";
import img7 from "../../images/img-Women-Dress2.jpg";

// const bCatagoriesbg = {
//   background: `url(${img1})`,
//   backgroundRepeat: "no-repeat",
//   position: "relative",
//   backgroundSize: "cover",
//   overFlowX: "hiden",
// };

export default class BrowserCatagories extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <div className="Name-tag-div1">
          <div className="Name-tag-div2">
            <h2 className="Name-tag">Browse Our Catagories</h2>
          </div>
        </div>
        <div className="check-1">
          <div className="check-2"></div>
        </div>

        <Slider {...settings}>
          <div className="single-slider">
            <img className="bcimages" src={img1} />
            <div className="bc-button-div">
              <button className="bc-button">T-Shirt</button>
            </div>
          </div>
          <div className="single-slider">
            <img className="bcimages" src={img2} />
            <div className="bc-button-div">
              <button className="bc-button">Men-Panjabi</button>
            </div>
          </div>
          <div className="single-slider">
            <img className="bcimages" src={img3} />
            <div className="bc-button-div">
              <button className="bc-button">Women-Dress</button>
            </div>
          </div>
          <div className="single-slider">
            <img className="bcimages" src={img4} />
            <div className="bc-button-div">
              <button className="bc-button">Women-Sandle</button>
            </div>
          </div>
          <div className="single-slider">
            <img className="bcimages" src={img5} />
            <div className="bc-button-div">
              <button className="bc-button">T-Shirt</button>
            </div>
          </div>
          <div className="single-slider">
            <img className="bcimages" src={img6} />
            <div className="bc-button-div">
              <button className="bc-button">Neckless</button>
            </div>
          </div>
          <div className="single-slider">
            <img className="bcimages" src={img7} />
            <div className="bc-button-div">
              <button className="bc-button">Women-Dress</button>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

// import React from 'react';

// const BrowserCatagories = () => {
//     return (
//         <div>

//         </div>
//     );
// }

// export default BrowserCatagories;
