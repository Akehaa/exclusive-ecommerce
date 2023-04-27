import Image from "next/image";
import GamingMonitor from '@/public/home/products/gaming_monitor.svg'

import { FiEye } from 'react-icons/fi'
import { VscHeart } from 'react-icons/vsc'

export function Product() {
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
      <div className="flex justify-center mb-4 bg-[#ecebeb] rounded h-[250px] ">
        <Image
          src={GamingMonitor}
          alt="Gaming Monitor"
          width={190}
          height={0}
          quality={100}
          className="px-4 lg:mt-4 md:px-0 lg:w-[220px] 2xl:w-[250px]">
        </Image>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <span className="font-medium line-clamp-4">IPS LCD Gaming Monitor</span>
        </div>
        <div className="flex gap-3">
          <span className="text-exclusive-secondary">$370</span>
          <span className="opacity-60 line-through">$400</span>
        </div>
        <span>Stars</span>
      </div>
    </div>
  )
}