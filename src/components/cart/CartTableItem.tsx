'use client';

import { useState, useContext } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"
import { IoClose } from "react-icons/io5";

import Image from "next/image";
import Link from "next/link";
import { CartContext } from "@/src/app/context/CartContextProvider";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
  price: number | string;
  defaultPriceId: string | undefined,
}

export function CartTableItem({ id, name, imageUrl, price, defaultPriceId }: ItemProps) {
  const [counter, setCounter] = useState(1)
  const { cartQuantity } = useContext(CartContext)

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
    <tr className="border flex mb-10 items-center gap-6 pl-4 md:gap-0 md:pl-0">
      <td className="relative py-6 pl-4 w-full flex flex-col gap-2 items-start md:pl-10 xl:flex-row xl:gap-5 xl:items-center ">
        <Image src={imageUrl} width={54} height={54} alt="" />
        <button className="absolute left-[0.650rem] md:top-[1.370rem] md:left-[2.075rem]" aria-label="remove from cart" title="remove from cart">
          <IoClose size={20} className="text-exclusive-text-1 bg-exclusive-secondary rounded-full" />
        </button>
        <Link href={`/products/${id}`} className="line-clamp-5 hover:underline">{name}</Link>
      </td>
      <td className="py-6 w-full">
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format((price as number * cartQuantity))}
      </td>
      <td className="py-6 w-full ">
        <div className="pt-2 px-3 pb-1 border-2 border-black/25 rounded w-fit ">
          {counter <= 9
            ? <span>
              0{counter}
            </span>
            : <span>
              {counter}
            </span>}
          {counter <= 9
            ? <div className="flex flex-col ml-6 -mt-5 2xl:-mt-7">
              <button onClick={increase}>
                <MdKeyboardArrowUp />
              </button>
              <button onClick={decrease}>
                <MdKeyboardArrowDown />
              </button>
            </div>
            : <div className="flex flex-col -mt-5 ml-6 lg:-mt-7">
              <button onClick={increase}>
                <MdKeyboardArrowUp />
              </button>
              <button onClick={decrease}>
                <MdKeyboardArrowDown />
              </button>
            </div>}
        </div>
      </td>
      <td className="w-full py-6 pr-16 text-right">
        $1000
      </td>
    </tr>
  )
}