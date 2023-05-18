import Image from "next/image";
import GamingMonitor from '@/public/home/products/gaming_monitor.svg'

import { FiEye } from 'react-icons/fi'
import { VscHeart } from 'react-icons/vsc'

import Link from "next/link";
import { ProductRating } from "./ProductRating";


export function ProductCard() {
  const discount = true;
  const discountAmout = 30;
  const newProduct = false;
  const productPrice = 400;

  function priceWithDiscount() {
    if (discount) {
      return productPrice - (productPrice * discountAmout / 100)
    }
  }

  return (
    <div>
      <div className="flex justify-between h-[250px] -mb-[250px]">
        <div className="mt-2 ml-2 md:mt-3 md:ml-3">
          {discount
            ? <span className="bg-exclusive-secondary text-exclusive-text-1 text-xs py-1 px-3 rounded">-{discountAmout}%</span>
            : null}
          {newProduct
            ? <span className="bg-exclusive-primary-1 text-exclusive-text-2 text-xs py-1 px-3 ml-2 rounded">NEW</span>
            : null}
        </div>
        <div className="flex flex-col gap-2 mt-2 mr-2 md:mt-3 md:mr-3">
          <button className="bg-exclusive-background p-2 h-auto w-9 rounded-full " aria-label="add to wishlist" title="add to wishlist">
            <VscHeart size={20} />
          </button>
          <button className="bg-exclusive-background p-2 h-auto w-9 rounded-full" >
            <FiEye size={20} />
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
          className=" w-[11rem] h-auto  px-4 -mt-6  md:px-0 md:-mb-[0.42rem] lg:w-52 lg:-mb-[1.475rem] ">
        </Image>
        <footer className="w-full h-[15.630rem] overflow-hidden">
          <button
            className="w-full text-exclusive-text-1 bg-black flex justify-center cursor-pointer rounded-b py-1 font-medium transform translate-y-[110%] opacity-0 group-hover:translate-y-[0%] group-hover:opacity-100 transition-all ease-in-out duration-200 mt-1 md:py-2 md:mt-[0.85rem] lg:mt-[0.01rem] ">
            Add To Cart
          </button>
        </footer>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex">
          <Link href="#" className="font-medium line-clamp-4">IPS LCD Gaming Monitor</Link>
        </div>
        {discount
          ? <div className="flex gap-3">
            <span className="text-exclusive-secondary">${priceWithDiscount()}</span>
            <span className="opacity-60 line-through">${productPrice}</span>
          </div>
          : <span className="text-exclusive-secondary">${productPrice}</span>
        }
        <ProductRating />
      </div>
    </div>
  )
}