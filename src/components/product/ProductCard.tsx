import Image from "next/image";
import GamingMonitor from '@/public/home/products/gaming_monitor.svg'

import { FiEye } from 'react-icons/fi'
import { VscHeart } from 'react-icons/vsc'

import Link from "next/link";
import { ProductRating } from "./ProductRating";


export function ProductCard() {
  return (
    <div>
      <div className="flex justify-between h-[250px] -mb-[250px]">
        <div className="mt-2 ml-2 md:mt-3 md:ml-3">
          <span className="bg-exclusive-secondary text-exclusive-text-1 text-xs py-1 px-3 rounded">-30%</span>
        </div>
        <div className="flex flex-col gap-2 mt-2 mr-2 md:mt-3 md:mr-3">
          <button className="bg-exclusive-background p-2 w-9 lg:w-10 rounded-full">
            <VscHeart size='auto' />
          </button>
          <button className="bg-exclusive-background p-2 w-9 lg:w-10 rounded-full" >
            <FiEye size='auto' />
          </button>
        </div>
      </div>
      <div className="bg-[#ecebeb] flex flex-col items-center mb-4 rounded pt-[3.775rem] h-[13rem] md:h-[15.630rem] group ">
        <Image
          src={GamingMonitor}
          alt="Gaming Monitor"
          width={190}
          height={0}
          quality={100}
          className=" w-[11rem]  px-4 -mt-6  md:px-0 md:-mb-[0.42rem] lg:w-52 lg:-mb-[1.475rem] ">
        </Image>
        <footer className="w-full h-[15.630rem] overflow-hidden">
          <span
            className="text-exclusive-text-1 bg-black flex justify-center cursor-pointer rounded-b py-1 font-medium transform translate-y-[110%] opacity-0 group-hover:translate-y-[0%] group-hover:opacity-100 transition-all ease-in-out duration-200 mt-1 md:py-2 md:mt-[0.85rem] lg:mt-[0.01rem] ">
            Add To Cart
          </span>
        </footer>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex">
          <Link href="#" className="font-medium line-clamp-4">IPS LCD Gaming Monitor</Link>
        </div>
        <div className="flex gap-3">
          <span className="text-exclusive-secondary">$280</span>
          <span className="opacity-60 line-through">$400</span>
        </div>
        <ProductRating />
      </div>
    </div>
  )
}