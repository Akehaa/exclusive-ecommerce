import Image from "next/image";
import GamingMonitor from '@/public/home/products/gaming_monitor.svg'

export function ItemOnCheckout(){
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3 md:gap-6">
        <Image src={GamingMonitor} alt="" width={54} height={54} />
        <span className="text-sm md:text-base">LCD Monitor</span>
      </div>
      <span>$1100</span>
    </div>
  )
}