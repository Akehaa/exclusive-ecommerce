'use client';

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "./slick-theme.css"
import { Iphone14 } from "./IPhone14";

const settings: Settings = {
  dots: true,
  dotsClass: "slick-dots slick-thumb",
  arrows: false,
  infinite: true,
  speed: 650,
  autoplay: true,
  autoplaySpeed: 3400,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export function Carousel() {
  return (
    <div>
      <Slider {...settings}>
        <div>
          <h3><Iphone14 /></h3>
        </div>
        <div>
          <h3><Iphone14 /></h3>
        </div>
        <div>
          <h3><Iphone14 /></h3>
        </div>
        <div>
          <h3><Iphone14 /></h3>
        </div>
        <div>
          <h3><Iphone14 /></h3>
        </div>
      </Slider>
    </div>
  );
};