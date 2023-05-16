import Link from "next/link";
import shopping from '@/public/about/shopping.svg'
import Image from "next/image";

import { CiShop } from 'react-icons/ci'
import { CiDollar } from 'react-icons/ci'
import { AiOutlineShopping } from 'react-icons/ai'
import { TbMoneybag } from 'react-icons/tb'

export default function page() {
  return (
    <>
      <div className="flex gap-3 mt-10 mb-10 text-sm w-5/6 mx-auto lg:mt-20 lg:mb-20">
        <Link href="#" className="opacity-50">
          Home
        </Link>
        <span className="opacity-50">
          /
        </span>
        <span className="font-medium cursor-default">
          About
        </span>
      </div>

      <div className="flex flex-col mb-36 lg:flex-row-reverse lg:items-center">
        <Image src={shopping} alt="" quality={100} className="lg:w-2/4" />
        <div className="w-5/6 mx-auto mt-10 lg:w-1/3">
          <h2 className="text-center font-inter font-semibold text-3xl mb-10 lg:text-left lg:text-5xl">Our Story</h2>
          <p className="text-sm mb-6 lg:text-base">
            Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
          </p>
          <p className="text-sm lg:text-base">
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-8 mb-36 lg:flex-row lg:w-5/6 lg:mx-auto 3xl:w-11/12">
        <div className="flex flex-col items-center border border-black/20 rounded w-fit mx-auto p-8 hover:bg-exclusive-secondary hover:text-white group lg:mb-0">
          <span className="mb-6 bg-black/20 p-2 rounded-full group-hover:bg-white/40">
            <CiShop size={40} className="bg-black p-1 rounded-full text-white group-hover:bg-white group-hover:text-exclusive-text-2" />
          </span>
          <span className="font-inter font-bold text-3xl">10.5k </span>
          <span className="text-sm text-center 2xl:text-base">Sallers active in our site</span>
        </div>
        <div className="flex flex-col items-center border border-black/20 rounded w-fit mx-auto p-8 hover:bg-exclusive-secondary hover:text-white group ">
          <span className="mb-6 bg-black/20 p-2 rounded-full group-hover:bg-white/40">
            <CiDollar size={40} className="bg-black p-1 rounded-full text-white group-hover:bg-white group-hover:text-exclusive-text-2" />
          </span>
          <span className="font-inter font-bold text-3xl">33k</span>
          <span className="text-sm text-center 2xl:text-base">Mopnthly Produduct Sale</span>
        </div>
        <div className="flex flex-col items-center border border-black/20 rounded w-fit mx-auto p-8 hover:bg-exclusive-secondary hover:text-white group  lg:mb-0">
          <span className="mb-6 bg-black/20 p-2 rounded-full group-hover:bg-white/40">
            <AiOutlineShopping size={40} className="bg-black p-1 rounded-full text-white group-hover:bg-white group-hover:text-exclusive-text-2" />
          </span>
          <span className="font-inter font-bold text-3xl">45.5k</span>
          <span className="text-sm text-center 2xl:text-base">Customer active in our site</span>
        </div>
        <div className="flex flex-col items-center border border-black/20 rounded w-fit mx-auto p-8 hover:bg-exclusive-secondary hover:text-white group ">
          <span className="mb-6 bg-black/20 p-2 rounded-full group-hover:bg-white/40">
            <TbMoneybag size={40} className="bg-black p-1 rounded-full text-white group-hover:bg-white group-hover:text-exclusive-text-2" />
          </span>
          <span className="font-inter font-bold text-3xl">25k</span>
          <span className="text-sm text-center 2xl:text-base">Anual gross sale in our site</span>
        </div>

      </div>
    </>
  )
}