'use client';

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings: Settings = {
  dots: false,
  arrows: true,
  infinite: false,
  speed: 650,
  autoplay: false,
  autoplaySpeed: 3400,
  pauseOnHover: true,
  slidesToShow: 2,
  swipeToSlide: true,
  slidesToScroll: 1,
};

export function ProductsOnSaleSlider() {
  return (
    <div>
      <Slider {...settings}>
        <div className="bg-red-700 h-40">
          <h3>1</h3>
        </div>
        <div className="bg-yellow-700 h-40">
          <h3>2</h3>
        </div>
        <div className="bg-blue-700 h-40">
          <h3>3</h3>
        </div>
        <div className="bg-green-700 h-40">
          <h3>4</h3>
        </div>
        <div className="bg-purple-700 h-40">
          <h3>5</h3>
        </div>
      </Slider>
    </div>
  );
};