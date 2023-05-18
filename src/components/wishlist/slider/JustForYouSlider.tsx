'use client';

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "./JustForYouSlider.css";

import { WishListProductCard } from "../WishListProductCard";

const settings: Settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 550,
  slidesToShow: 5,
  swipeToSlide: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      },
    },
  ]
};

export function JustForYouSlider(){
  return (
    <div>
      <Slider {...settings}>
        <div>
         <WishListProductCard justForYou={true}/>
        </div>
        <div>
         <WishListProductCard justForYou={true}/>
        </div>
        <div>
         <WishListProductCard justForYou={true}/>
        </div>
        <div>
         <WishListProductCard justForYou={true}/>
        </div>
        <div>
         <WishListProductCard justForYou={true}/>
        </div>
        <div>
         <WishListProductCard justForYou={true}/>
        </div>
      </Slider>
    </div>
  )
}