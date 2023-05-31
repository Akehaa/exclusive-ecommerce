"use client";

import Link from "next/link"
import { FiShoppingCart } from "react-icons/fi"
import { VscHeart } from "react-icons/vsc"

import { useContext } from 'react'
import { CartContext } from "@/src/app/context/CartContextProvider";

export function WishlistAndCart() {
  const { cartQuantity } = useContext(CartContext)
  const counter = 1

  return (
    <div className='flex gap-4'>
      {counter >= 1
        ? <div className='relative'>
          <Link href="/wishlist" aria-label='Wishlist' >
            <VscHeart size={23} />
          </Link>
          <Link href="/wishlist" className='absolute -top-1 -right-1 bg-exclusive-secondary text-exclusive-text-1 rounded-full text-xs px-1'>{counter}</Link>
        </div>
        :
        <Link href="/wishlist" aria-label='Wishlist' >
          <VscHeart size={23} />
        </Link>

      }
      {cartQuantity >= 1
        ? <div className='relative'>
          <Link href="/cart" aria-label='Cart'>
            <FiShoppingCart size={23} />
          </Link>
          <Link href="/cart" className='absolute -top-1 -right-2 bg-exclusive-secondary text-exclusive-text-1 rounded-full text-xs px-1'>{cartQuantity}</Link>
        </div>
        :
        <Link href="/cart" aria-label='Cart'>
          <FiShoppingCart size={23} />
        </Link>
      }
    </div>
  )
}