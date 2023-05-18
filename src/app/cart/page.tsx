import { CartTable } from "@/src/components/cart/CartTable";
import Link from "next/link";

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
        <button className="font-medium text-sm py-4 px-6 border border-black/40 rounded md:px-12 lg:text-base">Return To Shop</button>
        <button className="font-medium text-sm py-4 px-6 border border-black/40 rounded md:px-12 lg:text-base">Update Cart</button>
      </div>
      <div className="flex flex-col w-5/6 mx-auto lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-4 xl:justify-between xl:flex-row">
          <input type="text" name="" id="" className="border border-black px-6 py-4 lg:w-72 h-fit rounded" placeholder="Coupon Code" />
          <button className="bg-exclusive-secondary hover:bg-exclusive-secondary-hover h-fit duration-200 text-exclusive-text-1 py-4 px-12 text-sm font-medium mb-16 rounded md:text-base ">Apply Coupon</button>
        </div>
        <div className="border-2 border-black rounded px-6 py-8 mb-36 w-full lg:w-[370px] xl:w-[470px]">
          <h2 className="font-medium text-xl mb-6">Cart Total</h2>
          <div className="flex justify-between border-b border-black/50 pb-4">
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <div className="flex justify-between border-b border-black/50 pb-4 mt-4">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between pb-4 mt-4">
            <span>Total:</span>
            <span>$1750</span>
          </div>
          <div className="flex w-max mx-auto">
            <button className="bg-exclusive-secondary hover:bg-exclusive-secondary-hover h-fit duration-200 text-exclusive-text-1 py-4 px-12 text-sm font-medium rounded md:text-base ">Procees to checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}