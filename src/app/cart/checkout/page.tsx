"use client";

import * as Checkbox from "@radix-ui/react-checkbox";
import { BsCheckLg } from "react-icons/bs";
import { Navigation } from "@/src/components/checkout/Navigation";
import { ItemOnCheckout } from "@/src/components/checkout/ItemOnCheckout";
import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";

export default function page() {
  const { cartItems } = useContext(CartContext)

  const getTotalPrice = () => {
    return (
      cartItems.reduce((total, cartItem) => {
        const item = cartItems.find(item => item.name === cartItem.name)
        return total + ((item?.price) || 0) * cartItem.quantity
      }, 0)
    )
  }

  return (
    <>
      <Navigation />
      <h2 className="mb-12 font-inter text-4xl font-medium w-5/6 mx-auto">Billing Details</h2>
      <div className="flex flex-col w-5/6 mx-auto xl:flex-row xl:gap-44">
        <form className="xl:w-full" id="checkoutForm">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 opacity-50">First Name <span className="text-exclusive-secondary">*</span></label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-[#F5F5F5] p-3 w-full rounded mb-8"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="companyName" className="mb-2 opacity-50">Company Name</label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              className="bg-[#F5F5F5] p-3 w-full rounded mb-8"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="streetAddress" className="mb-2 opacity-50">Street Address<span className="text-exclusive-secondary">*</span></label>
            <input
              type="text"
              name="streetAddress"
              id="streetAddress"
              className="bg-[#F5F5F5] p-3 w-full rounded mb-8"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="apartmentFloorEtc" className="mb-2 opacity-50">Apartment, floor, etc. (optional)</label>
            <input
              type="text"
              name="apartmentFloorEt"
              id="apartmentFloorEt"
              className="bg-[#F5F5F5] p-3 w-full rounded mb-8"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="townCity" className="mb-2 opacity-50">Town/City<span className="text-exclusive-secondary">*</span></label>
            <input
              type="text"
              name="townCity"
              id="townCity"
              className="bg-[#F5F5F5] p-3 w-full rounded mb-8"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2 opacity-50">Phone Number<span className="text-exclusive-secondary">*</span></label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="bg-[#F5F5F5] p-3 w-full rounded mb-8"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 opacity-50">Email Address<span className="text-exclusive-secondary">*</span></label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-[#F5F5F5] p-3 w-full rounded mb-8"
              required
            />
          </div>
          <div className="flex items-start mb-24 xl:mb-36">
            <Checkbox.Root
              className="flex h-6 w-9 md:w-6 appearance-none items-center justify-center rounded-[4px] bg-[#e0e0e0]"
              defaultChecked
              id="saveInfo"
            >
              <Checkbox.Indicator className="flex items-center rounded justify-center w-full h-full bg-exclusive-secondary">
                <BsCheckLg className="text-exclusive-background" size={20} />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label
              className="pl-4 text-exclusive-text-2"
              htmlFor="saveInfo"
            >
              Save this information for faster check-out next time
            </label>
          </div>
        </form>
        <div className="xl:w-full">
          {cartItems.map(item => {
            return (
              <ItemOnCheckout key={item.id} id={item.id} name={item.name} imageUrl={item.imageURL} price={item.price} />
            )
          })}

          <div className="flex justify-between border-b border-black/50 pb-4">
            <span>Subtotal:</span>
            <span>
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(getTotalPrice())}
            </span>
          </div>
          <div className="flex justify-between border-b border-black/50 pb-4 mt-4">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between pb-4 mt-4">
            <span>Total:</span>
            <span>
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(getTotalPrice())}
            </span>
          </div>
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <input type="text" name="" id="" className="border border-black px-6 py-4 h-fit rounded lg:w-[50%] 2xl:w-72" placeholder="Coupon Code" />
            <button className="bg-exclusive-secondary hover:bg-exclusive-secondary-hover h-fit duration-200 text-exclusive-text-1 py-4 px-12 text-sm font-medium mb-16 rounded md:text-base lg:w-[50%] 2xl:w-60">Apply Coupon</button>
          </div>
          <button type="submit" form="checkoutForm" className="bg-exclusive-secondary hover:bg-exclusive-secondary-hover h-fit duration-200 text-exclusive-text-1 py-4 px-12 text-sm font-medium mb-16 rounded md:text-base ">Proceed to Payment</button>
        </div>
      </div>
    </>
  )
}