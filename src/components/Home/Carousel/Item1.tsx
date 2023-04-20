import Image from "next/image";
import appleLogo from "@/public/home/carousel/iphone/1200px-Apple_gray_logo_1.svg"
import phone from "@/public/home/carousel/iphone/hero_endframe__cvklg0xk3w6e_large_2.svg"

import Link from "next/link";

import { BsArrowRightShort } from 'react-icons/bs'

export function Item1() {
  return (
    <div className="bg-black h-[250px]">
      <div className="flex flex-col items-center gap-x-2">
        <Image src={appleLogo} alt="" width={120} height={49} className="pt-1" />
        <span className="text-exclusive-text-1 font-sans font-bold text-lg mt-1">
          Up to 10% <br /> off Voucher
        </span>
        <Link href="#" className="flex mt-1 text-exclusive-text-1 font-sans font-medium text-xs underline underline-offset-4">
          <span>Shop Now</span>
          <BsArrowRightShort size={20} className="text-exclusive-text-1" />
        </Link>
      </div>
      <div className="mt-2 flex justify-center">
        <Image src={phone} alt="" quality={100} width={496} height={0} className="w-40" />
      </div>
    </div>
  )
}