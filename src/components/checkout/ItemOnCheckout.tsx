"use client";

import { CartContext } from "@/src/app/context/CartContextProvider";
import Image from "next/image";
import { useContext } from "react";

interface ItemProps {
  id: string,
  name: string,
  imageUrl: string,
  price: number,
}

export function ItemOnCheckout({ id, name, imageUrl, price }: ItemProps) {
  const { getItemQuantity } = useContext(CartContext)

  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3 md:gap-6 relative">
        <Image src={imageUrl} alt="" width={54} height={54} className="relative" />
        {getItemQuantity(id) == 1
          ? null
          : <span className="absolute -top-2 -left-2 bg-red-500 px-1 rounded-full text-xs text-exclusive-text-1">
            {getItemQuantity(id)}
          </span>
        }
        <span className="text-sm md:text-base">{name}</span>
      </div>
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format((price as number * getItemQuantity(id)))}
    </div>
  )
}