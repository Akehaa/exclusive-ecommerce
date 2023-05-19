"use client";

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GamingMonitor from '@/public/home/products/gaming_monitor.svg'
import Image from 'next/image';
import { ProductRating } from '../ProductRating';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { VscHeart } from 'react-icons/vsc'

export default function ProductPage() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <div className='grid grid-cols-[36%_64%] mt-20 mb-20 md:grid-cols-[26%_74%] lg:grid-cols-[16%_44%_auto]'>
      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={3.99}
        verticalSwiping={true}
        swipeToSlide={true}
        focusOnSelect={true}
        infinite={false}
        vertical={true}
        arrows={false}
        dots={false}
      >
        <div className='w-[170px] bg-[#f3f3f3] rounded'>
          <Image src={GamingMonitor} alt='' width={121} height={114} className='w-[75px] h-auto mx-auto md:w-[121px]' />
        </div>
        <div className='w-[170px] bg-[#f3f3f3] rounded'>
          <Image src={GamingMonitor} alt='' width={121} height={114} className='w-[75px] h-auto mx-auto md:w-[121px]' />
        </div>
        <div className='w-[170px] bg-[#f3f3f3] rounded'>
          <Image src={GamingMonitor} alt='' width={121} height={114} className='w-[75px] h-auto mx-auto md:w-[121px]' />
        </div>
        <div className='w-[170px] bg-[#f3f3f3] rounded'>
          <Image src={GamingMonitor} alt='' width={121} height={114} className='w-[75px] h-auto mx-auto md:w-[121px]' />
        </div>
        <div className='w-[170px] bg-[#f3f3f3] rounded'>
          <Image src={GamingMonitor} alt='' width={121} height={114} className='w-[75px] h-auto mx-auto md:w-[121px]' />
        </div>
        <div className='w-[170px] bg-[#f3f3f3] rounded'>
          <Image src={GamingMonitor} alt='' width={121} height={114} className='w-[75px] h-auto mx-auto md:w-[121px]' />
        </div>

      </Slider>
      <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}
        arrows={false}
        dots={false}
        slidesToShow={0.99}
      >
        <div className='w-[170px] bg-[#f3f3f3] rounded h-[312px] md:h-[488px] lg:h-[414px] xl:h-[487px]'>
          <Image src={GamingMonitor} alt='' width={446} height={315} className='mx-auto h-full w-auto my-auto' />
        </div>
        <div className='w-[170px] bg-[#f3f3f3] rounded h-[312px] md:h-[488px] lg:h-[414px] xl:h-[487px]' >
          <Image src={GamingMonitor} alt='' width={446} height={315} className='mx-auto h-full w-auto my-auto' />
        </div>
        <div className='w-[170px] bg-[#f3f3f3] rounded h-[312px] md:h-[488px] lg:h-[414px] xl:h-[487px]'>
          <Image src={GamingMonitor} alt='' width={446} height={315} className='mx-auto h-full w-auto my-auto' />
        </div>
        <div className='w-[170px] bg-[#f3f3f3] rounded h-[312px] md:h-[488px] lg:h-[414px] xl:h-[487px]' >
          <Image src={GamingMonitor} alt='' width={446} height={315} className='mx-auto h-full w-auto my-auto' />
        </div>
        <div className='w-[170px] bg-[#f3f3f3] rounded h-[312px] md:h-[488px] lg:h-[414px] xl:h-[487px]'>
          <Image src={GamingMonitor} alt='' width={446} height={315} className='mx-auto h-full w-auto my-auto' />
        </div>
        <div className='w-[170px] bg-[#f3f3f3] rounded h-[312px] md:h-[488px] lg:h-[414px] xl:h-[487px]' >
          <Image src={GamingMonitor} alt='' width={446} height={315} className='mx-auto h-full w-auto my-auto' />
        </div>
      </Slider>
      <div>
        <h2 className='font-inter font-semibold text-2xl mb-3'>IPS LCD Gaming Monitor</h2>
        <div className='flex mb-3'>
          <ProductRating />
          <span className='-ml-16'>| In Stock</span>
        </div>
        <div className='mb-6'>
          <span className='font-inter text-2xl'>$192.00</span>
        </div>
        <div className='border-b border-black/40 pb-6 mb-6'>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime a beatae minus officia ipsum suscipit magni dolorum, ipsa voluptatibus cupiditate.</p>
        </div>
        <div className='mb-6'>
          <span>Colours:</span>
        </div>
        <div className='mb-6'>
          <span>Size:</span>
        </div>
        <div className='flex items-center gap-3'>
          <div className='flex items-center border w-fit rounded'>
            <button className='px-2 py-2 hover:bg-exclusive-secondary rounded-s hover:text-exclusive-text-1'>
              <AiOutlineMinus size={24} />
            </button>
            <span className='py-2 px-6 border-l border-r xl:px-7'>1</span>
            <button className='px-2 py-2 hover:bg-exclusive-secondary rounded-e hover:text-exclusive-text-1'>
              <AiOutlinePlus size={24} />
            </button>
          </div>
          <button className="bg-exclusive-secondary hover:bg-exclusive-secondary-hover duration-200 text-exclusive-text-1 text-sm font-medium py-[0.55rem] px-6 rounded md:text-base xl:px-12">Buy Now</button>
          <button className='border p-[0.55rem] rounded border-black/40'>
            <VscHeart size={20} />
          </button>
        </div>
      </div>
    </div >
  );
}