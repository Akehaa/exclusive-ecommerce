'use client';

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "./slick-theme.css";
import { Item1 } from "./Item1";

const settings: Settings = {
  dots: true,
  dotsClass: "slick-dots slick-thumb",
  infinite: true,
  speed: 650,
  autoplay: false,
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
        <div className="bg-blue-300 h-[250px]">
          <h3>2</h3>
        </div>
        <div className="bg-yellow-300 h-[250px]">
          <h3>3</h3>
        </div>
        <div className="bg-green-300 h-[250px]">
          <h3>4</h3>
        </div>
        <div className="bg-purple-300 h-[250px]">
          <h3>5</h3>
        </div>
      </Slider>
    </div>
  );
};