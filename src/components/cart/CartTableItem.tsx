'use client';

import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md"
import { IoClose } from "react-icons/io5";

import Image from "next/image";
import GamingMonitor from '@/public/home/products/gaming_monitor.svg'
import Link from "next/link";


export function CartTableItem() {
  const [counter, setCounter] = useState(1)

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
    <tr className="border flex mb-10 items-center">
      <td className="relative py-6 pl-10 w-full flex flex-col gap-2 items-start xl:flex-row xl:gap-5 xl:items-center ">
        <Image src={GamingMonitor} width={54} alt="" />
        <button className="absolute top-[1.370rem] left-[2.075rem]" aria-label="remove from cart" title="remove from cart">
          <IoClose size={20} className="text-exclusive-text-1 bg-exclusive-secondary rounded-full"/>
        </button>
        <Link href="/cart" className="line-clamp-5 hover:underline">LCD Monitor</Link>
      </td>
      <td className="py-6 w-full">
        $1000
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