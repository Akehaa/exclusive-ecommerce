import Image from "next/image";
import appleLogo from "@/public/home/carousel/iphone/1200px-Apple_gray_logo_1.svg"
import phone from "@/public/home/carousel/iphone/hero_endframe__cvklg0xk3w6e_large_2.svg"

import Link from "next/link";

import { BsArrowRightShort } from 'react-icons/bs'

export function Item1() {
  return (
    <div className="bg-black h-[250px] md:grid md:grid-cols-[45%_55%] lg:h-[320px]">
      <div className="flex flex-col items-center md:items-start md:ml-10 lg:mx-auto">
        <Image src={appleLogo} alt="" width={120} height={49} className="pt-1 md:w-36 md:mt-8 md:mb-4 lg:w-48" />
        <span className="text-exclusive-text-1 font-sans font-semibold text-lg mt-1 md:text-2xl md:mb-4 lg:text-5xl lg:leading-[4rem]">
          Up to 10% <br /> off Voucher
        </span>
        <Link href="#" className="flex mt-1 md:items-center">
          <span className="text-exclusive-text-1 font-sans font-medium text-xs underline underline-offset-4 md:text-sm md:underline-offset-8">Shop Now</span>
          <BsArrowRightShort size={22} className="text-exclusive-text-1 md:mt-1" />
        </Link>
      </div>
      <div className="my-auto md:mt-2">
        <Image src={phone} alt="" quality={100} width={496} height={0} className="w-40 md:w-[31rem] mx-auto" />
      </div>
    </div>
  )
}