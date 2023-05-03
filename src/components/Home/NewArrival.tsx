import ps5Slim from "@/public/home/newArrival/ps5Slim.svg"
import womensCollections from "@/public/home/newArrival/womensCollections.svg"
import amazonSpeakers from "@/public/home/newArrival/amazonSpeakers.svg"
import gucciPerfume from '@/public/home/newArrival/gucciPerfume.svg'
import Image from "next/image"


export function NewArrival() {
  return (
    <div className="flex flex-col mx-auto mb-[8.750rem] gap-8 md:flex-row justify-center">
      <div>
        <Image src={ps5Slim} width={560} height={0} alt="" className="w-[560px] bg-[#0C0C0C] rounded pt-20"/>
      </div>
      <div className="flex flex-col gap-8 items-center">
       <div className="bg-[#0C0C0C] w-full flex justify-end rounded">
       <Image src={womensCollections} width={570} height={0} alt="" className="w-[250px] md:mt-0 md:w-[310px] lg:w-[370px] xl:w-[510px] xl:pl-14 rounded"/>
       </div>
        <div className="flex gap-8 h-full">
          <div>
          <Image src={amazonSpeakers} width={270} height={0} alt="" className="bg-[#0C0C0C] h-full rounded md:mt-0 p-5 lg:p-8 xl:p-10"/>
          </div>
          <div>
          <Image src={gucciPerfume} width={270} height={0} alt="" className="bg-[#0C0C0C] h-full rounded md:mt-0 p-5 lg:p-8 xl:p-10"/>
          </div>
        </div>
      </div>
    </div>
  )
}