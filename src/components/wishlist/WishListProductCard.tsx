"use client";

import Image from "next/image";

import { FiEye } from 'react-icons/fi'

import Link from "next/link";
import { ProductRating } from "../product/ProductRating";
import { BsTrash3 } from "react-icons/bs";

export interface WishListProductCardProps {
  justForYou: boolean,
  id: string,
  name: string,
  imageUrl: string[] | string,
  price: number,
}

export function WishListProductCard({ id, name, imageUrl, price, justForYou }: WishListProductCardProps) {
  const discount = true;
  const discountAmout = 20;
  const newProduct = true;

  function priceWithDiscount() {
    if (discount) {
      return price + (price * discountAmout / 100)
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
        <div className="flex flex-col h-fit gap-2 mt-2 mr-2 md:mt-3 md:mr-3">
          {justForYou
            ? <button className="bg-exclusive-background p-2 h-auto w-9 rounded-full">
              <FiEye size={20} />
            </button>
            : <button className="bg-exclusive-background p-2 h-auto w-9 rounded-full" aria-label="remove from wishlist" title="remove from wishlist" >
              <BsTrash3 size={20} />
            </button>}
        </div>
      </div>
      <div className="bg-[#ecebeb] flex flex-col items-center mb-4 rounded pt-[3.775rem] h-[19rem] group focus:outline-none ">
        <Image
          src={imageUrl?.[0]}
          alt={name}
          width={130}
          height={190}
          quality={100}
          className="w-[220px] max-h-[190px] px-4 my-auto lg:w-[230px] 2xl:w-[240px] ">
        </Image>
        <footer className="w-full overflow-hidden">
          <button
            className="w-full text-exclusive-text-1 bg-black flex justify-center cursor-pointer rounded-b py-1 font-medium transform translate-y-[110%] opacity-0 group-hover:translate-y-[0%] group-hover:opacity-100 transition-all ease-in-out duration-200 mt-1 md:py-2 ">
            Add To Cart
          </button>
        </footer>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex">
          <Link href="#" className="font-medium line-clamp-4">{name}</Link>
        </div>
        {discount
          ? <div className="flex gap-3">
            <span className="text-exclusive-secondary">${price}</span>
            <span className="opacity-60 line-through">${priceWithDiscount()}</span>
          </div>
          : <span className="text-exclusive-secondary">${price}</span>
        }
        <ProductRating />
      </div>
    </div>
  )
}