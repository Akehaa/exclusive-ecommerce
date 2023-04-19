'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: false,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendDots: dots => (
    <div>
      <ul className="mb-5 items-center"> {dots} </ul>
    </div>
  ),
  customPaging: i => (
    <span className="bg-[#808080] w-[0.625rem] h-[0.625rem] flex rounded-full">
    </span>
  ),
};

export function Carousel() {
  return (
    <div className="">
      <Slider {...settings}>
        <div className="bg-red-300 h-[250px]">
          <h3>1</h3>
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