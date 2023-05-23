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
import { TbRefresh, TbTruckDelivery } from 'react-icons/tb';

export default function ProductPage() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [counter, setCounter] = useState(1);
  const inStock = true;
  const hasColors = true;
  const hasSizes = true;

  function increase() {
    if (counter < 99) {
      setCounter(counter + 1)
    }
  }
  function decrease() {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }

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
      <div className='flex flex-col w-screen mt-20 pr-10 lg:mt-0 lg:pr-0 lg:ml-2 lg:w-auto xl:ml-10 2xl:ml-[70px] 2xl:pr-4'>
        <h2 className='font-inter font-semibold text-2xl mb-3'>IPS LCD Gaming Monitor</h2>
        <div className='flex mb-3'>
          <ProductRating />
          {inStock
            ? <span className='-ml-16 text-green-400'><span className='text-exclusive-text-2'>|</span> In Stock</span>
            : <span className='-ml-16 text-red-400'><span className='text-exclusive-text-2'>|</span> Out of stock</span>}
        </div>
        <div className='mb-6'>
          <span className='font-inter text-2xl'>$192.00</span>
        </div>
        <div className='border-b border-black/40 pb-6 mb-6'>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime a beatae minus officia ipsum suscipit magni dolorum, ipsa voluptatibus cupiditate.</p>
        </div>
        {hasColors
          ? <form className='mb-6 flex gap-6'>
            <span className='font-inter text-xl'>Colours:</span>
            <div className='flex gap-2'>
              <div>
                <input type="radio" name="option" id="Color1" className="peer hidden" required />
                <label
                  htmlFor="Color1"
                  className='outline outline-black/40 outline-1 rounded-full px-[10px] py-[0px] text-sm select-none cursor-pointer peer-checked:bg-exclusive-secondary peer-checked:text-exclusive-text-1 peer-checked:border-white peer-checked:border-2 peer-checked:outline-black'
                ></label>
              </div>
              <div>
                <input type="radio" name="option" id="Color2" className="peer hidden" required />
                <label
                  htmlFor="Color2"
                  className='outline outline-black/40 outline-1 rounded-full px-[10px] py-[0px] text-sm select-none cursor-pointer peer-checked:bg-blue-600 peer-checked:text-exclusive-text-1 peer-checked:border-white peer-checked:border-2 peer-checked:outline-black'
                ></label>
              </div>
            </div>
          </form>
          : null
        }
        {
          hasSizes
            ? <form className='mb-6 flex items-center gap-6' id='sizesForm'>
              <span className='font-inter text-xl'>Size:</span>
              <div className="flex flex-row gap-4 items-center">
                <div>
                  <input type="radio" name="option" id="1" className="peer hidden" required />
                  <label
                    htmlFor="1"
                    className='outline outline-black/40 outline-1 rounded p-2 text-sm select-none cursor-pointer peer-checked:bg-exclusive-secondary peer-checked:text-exclusive-text-1 peer-checked:outline-none'
                  >XS</label>
                </div>

                <div>
                  <input type="radio" name="option" id="2" className="peer hidden" />
                  <label
                    htmlFor="2"
                    className='outline outline-black/40 outline-1 rounded py-2 px-3 text-sm select-none cursor-pointer peer-checked:bg-exclusive-secondary peer-checked:text-exclusive-text-1 peer-checked:outline-none'
                  >S</label>
                </div>

                <input type="radio" name="option" id="3" className="peer hidden" />
                <label
                  htmlFor="3"
                  className='outline outline-black/40 outline-1 rounded p-2 text-sm select-none cursor-pointer peer-checked:bg-exclusive-secondary peer-checked:text-exclusive-text-1 peer-checked:outline-none'
                >M</label>

                <div>
                  <input type="radio" name="option" id="4" className="peer hidden" />
                  <label
                    htmlFor="4"
                    className='outline outline-black/40 outline-1 rounded py-2 px-3 text-sm select-none cursor-pointer peer-checked:bg-exclusive-secondary peer-checked:text-exclusive-text-1 peer-checked:outline-none'
                  >L</label>
                </div>
                <div>
                  <input type="radio" name="option" id="5" className="peer hidden" />
                  <label
                    htmlFor="5"
                    className='outline outline-black/40 outline-1 rounded p-2 text-sm select-none cursor-pointer peer-checked:bg-exclusive-secondary peer-checked:text-exclusive-text-1 peer-checked:outline-none'
                  >XL</label>
                </div>
              </div>
            </form>
            : null
        }

        <div className='flex items-center gap-3'>
          <div className='flex items-center border border-black/40 w-fit rounded'>
            <button className='px-2 py-2 hover:bg-exclusive-secondary rounded-s hover:text-exclusive-text-1' onClick={decrease}>
              <AiOutlineMinus size={24} />
            </button>
            <span className='py-2 border-l border-r border-black/40 w-14 text-center font md:w-16 2xl:w-20'>{counter}</span>
            <button className='px-2 py-2 hover:bg-exclusive-secondary rounded-e hover:text-exclusive-text-1' onClick={increase}>
              <AiOutlinePlus size={24} />
            </button>
          </div>
          <button type='submit' form='sizesForm' className="bg-exclusive-secondary hover:bg-exclusive-secondary-hover duration-200 text-exclusive-text-1 text-sm font-medium py-[0.55rem] px-6 rounded md:text-base lg:px-11 xl:px-12">Buy Now</button>
          <button className='border p-[0.55rem] rounded border-black/40'>
            <VscHeart size={20} />
          </button>
        </div>
        <div className='w-[19.4rem] md:w-[20.4rem] mt-10 lg:w-[23rem] xl:w-[23.5rem] 2xl:w-[24.5rem]'>
          <div className='flex items-center gap-4 p-4 w-full border border-black/40 rounded-t'>
            <TbTruckDelivery size={40} />
            <div className='flex flex-col'>
              <span className='font-medium'>Free Delivery</span>
              <span className='font-medium text-xs'>Enter your postal code for Delivery Availability</span>
            </div>
          </div>
          <div className='flex items-center gap-4 p-4 border border-black/40 w-full rounded-b'>
            <TbRefresh size={40} />
            <div className='flex flex-col'>
              <span className='font-medium'>Return Delivery</span>
              <span className='font-medium text-xs'>Free 30 Days Delivery Returns. Details</span>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}