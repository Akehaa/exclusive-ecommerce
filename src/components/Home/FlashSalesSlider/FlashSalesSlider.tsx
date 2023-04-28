'use client';

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "./slick-theme.css";
import { Product } from "./Product";

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
      breakpoint: 2500,
      settings: {
        slidesToShow: 4.5,
      },
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3.5,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2.8,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2.4,
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
    <div>
      <Slider {...settings}>
        <div className="h-[22rem]">
          <Product />
        </div>
        <div className="h-[22rem]">
          <Product />
        </div>
        <div className="h-[22rem]">
          <Product />
        </div>
        <div className="h-[22rem]">
          <Product />
        </div>
        <div className="h-[22rem]">
          <Product />
        </div>
        <div className="h-[22rem]">
          <Product />
        </div>
        <div className="h-[22rem]">
          <Product />
        </div>
        <div className="h-[22rem]">
          <Product />
        </div>
      </Slider>
    </div>
  );
};