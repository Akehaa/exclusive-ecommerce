'use client';

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "./slick-theme.css";

import { useRef } from "react";
import { HiArrowRight } from 'react-icons/hi'
import { HiArrowLeft } from 'react-icons/hi'

import { ProductCard } from "@/src/components/product/ProductCard";

const settings: Settings = {
  dots: false,
  arrows: false,
  infinite: false,
  swipeToSlide: true,
  speed: 550,
  slidesToShow: 4,
  rows: 2,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
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
        slidesToShow: 1.4,
      },
    },
  ]
};

export function ExploreOurProductsSlider() {
  const slider = useRef(null);

  return (
    <div>
      <div className="flex justify-end gap-2 mr-8 mb-[3.750rem] -mt-[2rem] md:-mt-[2.6rem]">
        {/* @ts-ignore: slickPrev library type*/}
        <button onClick={() => slider?.current?.slickPrev()} className="bg-[#ecebeb] p-3 rounded-full w-9 h-9 md:w-12 md:h-12" ><HiArrowLeft size="auto" /></button>
        {/* @ts-ignore: slickNext library type */}
        <button onClick={() => slider?.current?.slickNext()} className="bg-[#ecebeb] p-3 rounded-full w-9 h-9 md:w-12 md:h-12"><HiArrowRight size="auto" /></button>
      </div>
      <Slider ref={slider} {...settings}>
        <div className="mb-[3.750rem]">
          <ProductCard />
        </div>
        <div className="mb-[3.750rem]">
          <ProductCard />
        </div>
        <div className="mb-[3.750rem]">
          <ProductCard />
        </div>
        <div className="mb-[3.750rem]">
          <ProductCard />
        </div>
        <div className="mb-[3.750rem]">
          <ProductCard />
        </div>
        <div className="mb-[3.750rem]">
          <ProductCard />
        </div>
        <div className="mb-[3.750rem]">
          <ProductCard />
        </div>
        <div className="mb-[3.750rem]">
          <ProductCard />
        </div>
        <div className="mb-[3.750rem]">
          <ProductCard />
        </div>
        <div className="mb-[3.750rem]">
          <ProductCard />
        </div>
      </Slider>
    </div>

  )
}