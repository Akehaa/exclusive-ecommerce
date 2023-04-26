'use client';

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "./slick-theme.css"
import { Item1 } from "./Item1";

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
          <h3><Item1 /></h3>
        </div>
        <div>
          <h3><Item1 /></h3>
        </div>
        <div>
          <h3><Item1 /></h3>
        </div>
        <div>
          <h3><Item1 /></h3>
        </div>
        <div>
          <h3><Item1 /></h3>
        </div>
      </Slider>
    </div>
  );
};