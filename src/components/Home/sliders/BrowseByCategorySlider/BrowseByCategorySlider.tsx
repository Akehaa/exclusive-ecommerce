'use client';

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "./slick-theme.css";

import { useRef } from "react";
import { HiArrowRight } from 'react-icons/hi'
import { HiArrowLeft } from 'react-icons/hi'

import { TfiMobile } from 'react-icons/tfi'
import { SlScreenDesktop } from 'react-icons/sl'
import { IoWatchOutline } from 'react-icons/io5'
import { AiOutlineCamera } from 'react-icons/ai'
import { FiHeadphones } from 'react-icons/fi'
import { SiNintendo3Ds } from 'react-icons/si'
import Link from "next/link";

const settings: Settings = {
  centerPadding: "0px",
  centerMode: true,
  dots: false,
  arrows: false,
  infinite: true,
  speed: 550,
  slidesToShow: 6,
  swipeToSlide: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
      },
    },
  ]
};

export function BrowseByCategorySlider() {
  const slider = useRef(null);

  return (
    <div>
      <div className="flex justify-end gap-2 pb-[2.5rem] -mt-[4.4rem]  md:pb-[3.1rem]">
        <button className="bg-[#ecebeb] p-3 rounded-full w-9 h-9 md:w-12 md:h-12" onClick={() => slider?.current?.slickPrev()}><HiArrowLeft size="auto" /></button>
        <button className="bg-[#ecebeb] p-3 rounded-full w-9 h-9 md:w-12 md:h-12" onClick={() => slider?.current?.slickNext()}><HiArrowRight size="auto" /></button>
      </div>
      <Slider ref={slider} {...settings}>
        <Link href="#">
          <div className="flex flex-col items-center justify-center gap-4 border rounded-md h-36 slide-focus">
            <TfiMobile size={56} />
            <span>Phones</span>
          </div>
        </Link>

        <Link href="#">
          <div className="flex flex-col items-center justify-center gap-4 border rounded-md h-36 slide-focus">
            <SlScreenDesktop size={56} />
            <span>Computers</span>
          </div>
        </Link>

        <Link href="#">
          <div className="flex flex-col items-center justify-center gap-4 border rounded-md h-36 slide-focus">
            <IoWatchOutline size={56} />
            <span>SmartWatch</span>
          </div>
        </Link>

        <Link href="#">
          <div className="flex flex-col items-center justify-center gap-4 border rounded-md h-36 slide-focus">
            <AiOutlineCamera size={56} />
            <span>Camera</span>
          </div>
        </Link>

        <Link href="#">
          <div className="flex flex-col items-center justify-center gap-4 border rounded-md h-36 slide-focus">
            <FiHeadphones size={56} />
            <span>HeadPhones</span>
          </div>
        </Link>

        <Link href="#">
          <div className="flex flex-col items-center justify-center gap-4 border rounded-md h-36 slide-focus">
            <SiNintendo3Ds size={56} />
            <span>Gaming</span>
          </div>
        </Link>
      </Slider>
    </div>
  );
};