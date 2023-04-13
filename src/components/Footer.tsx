import Image from 'next/image'
import Link from 'next/link'

import Exclusive from '../assets/logo-footer.svg'
import QRcode from '../assets/Qrcode.svg'
import GooglePlay from '../assets/google-play-badge.png'
import AppStore from '../assets/app-store-badge.svg'

import { RiFacebookLine } from 'react-icons/ri'
import { RiTwitterLine } from 'react-icons/ri'
import { RiInstagramLine } from 'react-icons/ri'
import { RiLinkedinLine } from 'react-icons/ri'
import { RiCopyrightLine } from 'react-icons/ri'

export function Footer() {
  return (
    <footer className="bg-black text-exclusive-text-1">
      <section className='flex flex-row flex-wrap justify-center py-10 px-10 gap-x-10 md:gap-x-2 md:mx-auto lg:w-5/6 lg:pt-20 lg:justify-between lg:p-0 lg:pb-[3.75rem]'>
        <div className='flex flex-col mb-6 md:mb-0'>
          <Image
            src={Exclusive}
            width={0}
            height={0}
            quality={100}
            alt=''
            className='mb-6'
          />
          <h3 className='flex flex-col mb-6 font-medium text-xl'>Subscribe</h3>
          <span className='font-extralight mb-4'>Get 10% off your first order</span>
          <input
            placeholder='Enter your email'
            className='py-3 pl-4 rounded-[0.250rem] bg-transparent border placeholder:opacity-70'>
          </input>
        </div>

        <div className='flex flex-col mb-6'>
          <h3 className='mb-6 font-medium text-xl'>Support</h3>
          <span className='mb-4 text-center'>111 Bijoy sarani, Dhaka,<br/>  DH 1515, Bangladesh.</span>
          <span className='mb-4'>exclusive@gmail.com</span>
          <span className='mb-4'>+88015-88888-9999</span>
        </div>

        <div className='flex flex-col mb-6'>
          <h3 className='mb-6 font-medium text-xl'>Account</h3>
          <Link href="/" className='mb-4'>My Account</Link>
          <Link href="/" className='mb-4' >Login / Register</Link>
          <Link href="/" className='mb-4'>Cart</Link>
          <Link href="/" className='mb-4'>Wishlist</Link>
          <Link href="/" className='mb-4'>Shop</Link>
        </div>

        <div className='flex flex-col mb-6'>
          <h3 className='mb-6 font-medium text-xl '>Quick Link</h3>
          <Link href="/" className='mb-4'>Privacy Policy</Link>
          <Link href="/" className='mb-4'>Terms Of Use</Link>
          <Link href="/" className='mb-4'>FAQ</Link>
          <Link href="/" className='mb-4'>Contact</Link>
        </div>

        <div className='flex flex-col'>
          <h3 className='mb-6 font-medium text-xl'>Download App</h3>
          <div className='ml-1'>
            <span className='text-xs opacity-70'>Save $3 with App New User Only</span>
          </div>
          <div>
            <div className='flex mb-6'>
              <Image
                src={QRcode}
                width={0}
                height={0}
                quality={100}
                alt="QRcode"
                className='mt-2'
              />
              <div className='flex flex-col items-center'>
                <Link href="/">
                  <Image
                    src={GooglePlay}
                    width={0}
                    height={0}
                    quality={100}
                    alt="get it on GooglePlay"
                    className='w-32'
                  />
                </Link>
                <Link href="/">
                  <Image
                    src={AppStore}
                    width={0}
                    height={0}
                    quality={100}
                    alt="get it on AppStore"
                    className='w-28'
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className='flex gap-6'>
            <Link href="/"><RiFacebookLine size={24} /></Link>
            <Link href="/"><RiTwitterLine size={24} /></Link>
            <Link href="/"><RiInstagramLine size={24} /></Link>
            <Link href="/"><RiLinkedinLine size={24} /></Link>
          </div>
        </div>
      </section>
      <div className='flex items-center justify-center pb-6 opacity-40 gap-[0.375rem]'>
        <span><RiCopyrightLine size={22}/></span>
        <span className='font-light'>Copyright Rimel 2022. All right reserved</span>
      </div>
    </footer>
  )
}