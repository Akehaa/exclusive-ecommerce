import Image from 'next/image'
import Exclusive from '@/public/header/logo-header.svg'
import Link from 'next/link'

import { VscHeart } from 'react-icons/vsc'
import { FiShoppingCart } from 'react-icons/fi'
import { HiMagnifyingGlass } from 'react-icons/hi2'

export function Header() {
  return (
    <header className="flex flex-col flex-wrap border-b-[1px] border-opacity-30 border-black">
      <section className="bg-black text-exclusive-text-1 text-sm text-center py-3 px-3 ">
        <span className='pr-2 '>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
        <Link href="#" className='font-semibold underline underline-offset-2'>ShopNow</Link>
      </section>

      <section className='flex flex-col items-center gap-4 mt-[2.938rem] mb-[1.438rem] md:flex-row md:justify-between md:mx-auto lg:w-5/6' >
        <div className='flex justify-center flex-wrap mb-4 md:mb-0 '>
          <h1 className='mr-3 lg:mr-8 xl:mr-32 2xl:mr-48'>
            <Link href="#">
              <Image
                src={Exclusive}
                width={0}
                height={0}
                quality={100}
                alt='go to home page'
              />
            </Link>
          </h1>

          <div>
            <ul className='flex gap-3 items-center text-sm lg:text-lg xl:gap-6 2xl:gap-12'>
              <li>
                <Link href="#" className='hover:underline underline-offset-[5px] decoration-gray-800'>Home</Link>
              </li>
              <li>
                <Link href="/contact" className='hover:underline underline-offset-[5px] decoration-gray-800'>Contact</Link>
              </li>
              <li>
                <Link href="#" className='hover:underline underline-offset-[5px] decoration-gray-800'>About</Link>
              </li>
              <li>
                <Link href="/sign-up" className='hover:underline underline-offset-[5px] decoration-gray-800'>Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex gap-6 mx-4 items-center justify-center md:justify-between'>
          <div className='flex items-center md:mr-6'>
            <input
              type="text"
              alt='Search for products'
              placeholder='What are you looking for?'
              className='text-xs bg-[#eeeeee] rounded py-2 w-60 pl-5'
            />
            <button aria-label='Search'>
              <HiMagnifyingGlass size={23} className='-ml-[2.16rem]' />
            </button>
          </div>
          <div className='flex gap-4'>
            <Link href="#" aria-label='Wishlist' >
              <VscHeart size={23} />
            </Link>
            <Link href="#" aria-label='Cart'>
              <FiShoppingCart size={23} />
            </Link>
          </div>
        </div>
      </section>
    </header>
  )
}