import Image from "next/image";
import appleLogo from "@/public/home/carousel/iphone/1200px-Apple_gray_logo_1.svg"
import phone from "@/public/home/carousel/iphone/hero_endframe__cvklg0xk3w6e_large_2.svg"

import Link from "next/link";

import { BsArrowRightShort } from 'react-icons/bs'

export function Iphone14() {
  return (
    <div className="bg-black h-[274px] md:grid md:grid-cols-[45%_55%] lg:h-[324px] -mr-[30px]"> {/* -mr-[30px] due to the margin right on globalcss */}
      <div className="flex flex-col items-center md:items-start md:ml-10 lg:mx-auto">
        <Image src={appleLogo} alt="iPhone 14 Series" width={120} height={49} className="pt-2 mb-2 md:w-36 md:mt-7 md:mb-7 lg:w-40 xl:w-48" />
        <span className="text-exclusive-text-1 font-inter font-semibold text-lg md:text-2xl lg:text-4xl lg:mb-2 xl:text-5xl">
          Up to 10%
        </span>
        <span className="text-exclusive-text-1 font-inter font-semibold text-lg md:text-2xl lg:text-4xl xl:text-5xl">
          off Voucher
        </span>
        <Link href="#" className="flex mt-2 md:mt-7 items-center">
          <span className="text-exclusive-text-1 font-poppins font-medium text-xs underline underline-offset-4 md:text-sm md:underline-offset-8 lg:text-base">Shop Now</span>
          <BsArrowRightShort size={26} className="text-exclusive-text-1 mt-1" />
        </Link>
      </div>
      <div className="md:mt-2">
        <Image src={phone} alt="" quality={100} width={496} height={0} className="mt-2 w-40 md:w-[31rem] mx-auto" />
      </div>
    </div>
  )
}