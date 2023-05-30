"use client";

import { CartContext } from "@/src/app/context/CartContextProvider";
import { CartTableItem } from "./CartTableItem";
import { useContext } from 'react'

export function CartTable() {
  const { cartItems } = useContext(CartContext)

  return (
    <table className="w-5/6 mx-auto text-xs 2xl:text-base">
      <tbody>
        <tr className="border flex mb-10 px-2 items-center pl-6 gap-8 md:justify-normal md:px-0 md:pl-0">
          <td className="md:py-6 md:pl-10 md:w-full">
            Product
          </td>
          <td className="md:py-6 md:w-full">
            Price
          </td>
          <td className="pr-6 md:py-6 md:w-full 2xl:pr-10 ">
            Quantity
          </td>
          <td className="md:w-full md:py-6 md:pr-16 md:text-right">
            Subtotal
          </td>
        </tr>
        {cartItems.map(item => {
          return (
            <CartTableItem key={item.id} id={item.id} name={item.name} imageUrl={item.imageURL} price={item.price} defaultPriceId={item.defaultPriceId} quantity={item.quantity} />
          )
        })}
      </tbody>
    </table>
  )
}