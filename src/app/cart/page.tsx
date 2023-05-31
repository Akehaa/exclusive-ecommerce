import { CartTable } from "@/src/components/cart/CartTable";
import Link from "next/link";
import { ShowCartData } from "@/src/components/cart/ShowCartData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart"
}

export default function page() {
  return (
    <div>
      <div className="flex gap-3 mt-10 mb-10 text-sm w-5/6 mx-auto lg:mt-20 lg:mb-20">
        <Link href="#" className="opacity-50">
          Home
        </Link>
        <span className="opacity-50">
          /
        </span>
        <span className="font-medium cursor-default">
          Cart
        </span>
      </div>
      <CartTable />
      <div className="flex justify-between w-5/6 mx-auto mb-20">
        <Link href="#" className="font-medium text-sm py-4 px-6 border border-black/40 rounded md:px-12 lg:text-base">Return To Shop</Link>
        <button className="font-medium text-sm py-4 px-6 border border-black/40 rounded md:px-12 lg:text-base">Update Cart</button>
      </div>
      <div className="flex flex-col w-5/6 mx-auto lg:flex-row lg:justify-between">
        <ShowCartData />
      </div>
    </div>
  )
}