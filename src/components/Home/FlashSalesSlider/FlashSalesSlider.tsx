'use client';

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "./slick-theme.css";

const settings: Settings = {
  dots: false,
  arrows: true,
  infinite: false,
  speed: 550,
  slidesToShow: 5.5,
  swipeToSlide: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 4.5,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3.5,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2.5,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1.5,
      },
    },
  ]
};


export function ProductsOnSaleSlider() {
  return (
    <div className="">
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
        <div className="bg-orange-700 h-40">
          <h3>6</h3>
        </div>
        <div className="bg-pink-700 h-40">
          <h3>7</h3>
        </div>
        <div className="bg-fuchsia-700 h-40">
          <h3>8</h3>
        </div>
      </Slider>
    </div>
  );
};