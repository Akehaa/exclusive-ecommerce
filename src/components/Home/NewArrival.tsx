import ps5Slim from "@/public/home/newArrival/ps5Slim.svg"
import womensCollections from "@/public/home/newArrival/womensCollections.svg"
import amazonSpeakers from "@/public/home/newArrival/amazonSpeakers.svg"
import gucciPerfume from '@/public/home/newArrival/gucciPerfume.svg'
import Image from "next/image"
import Link from "next/link"


export function NewArrival() {
  return (
    <div className="flex flex-col mx-auto mb-[8.750rem] gap-8 md:flex-row">
      <div>
        <Image src={ps5Slim} width={560} height={0} alt="" className="w-[563px] bg-[#0C0C0C] rounded pt-20 px-5" />
        <div className="flex flex-col text-exclusive-text-1 gap-4 -mt-[8.5rem] mb-4 ml-4 xl:-mt-40">
          <span className="font-inter font-semibold xl:text-2xl">PlayStation 5</span>
          <span className="text-sm">Black and White version of the PS5 <br /> coming out on sale.</span>
          <Link href="#" className="font-medium underline-offset-4 underline">Shop Now</Link>
        </div>
      </div>

      <div className="flex flex-col gap-8 items-center">
        <div className="flex rounded">
          <div className="absolute w-full left-8 mt-9 md:relative xl:w-max">
            <div className="flex flex-col gap-4 text-exclusive-text-1 md:absolute md:w-max md:-mx-4 lg:mt-12 xl:mt-28">
              <span className="font-inter font-semibold xl:text-2xl">Women’s Collections</span>
              <span className="text-sm">Featured woman collections that <br /> give you another vibe.</span>
              <Link href="#" className="font-medium underline-offset-4 underline">Shop Now</Link>
            </div>
          </div>
          <Image src={womensCollections} width={570} height={0} alt="" className="bg-[#0C0C0C] pl-20 rounded" />
        </div>

        <div className="flex gap-8 h-full">
          <div>
            <Image src={amazonSpeakers} width={240} height={0} alt="" className="bg-[#0C0C0C] h-full rounded md:mt-0 p-5 lg:p-8 xl:p-10 " />
          </div>
          <div>
            <Image src={gucciPerfume} width={240} height={0} alt="" className="bg-[#0C0C0C] h-full rounded md:mt-0 p-5 lg:p-8 xl:p-10" />
          </div>
        </div>

      </div>
    </div>
  )
}