"use client";

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export function NavigationBar() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 300px)": {
        slides: { perView: 4, spacing: 12, number: 8 },
      },
      "(min-width: 700px)": {
        slides: { perView: 5, spacing: 10 },
      },
    },
  })

  return (
    <NavigationMenu.Root ref={ref} className="keen-slider text-xs border-b-[1px] border-opacity-30 border-black flex-col md:px-3 lg:text-base lg:flex-row">
      <NavigationMenu.List className='flex lg:flex-col '>
        <NavigationMenu.Item className='keen-slider__slide flex py-1 items-center'>
          <NavigationMenu.Trigger>
            Woman’s Fashion
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <NavigationMenu.Link href='/'>
              Bags
            </NavigationMenu.Link>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item className='keen-slider__slide flex py-1 items-center'>
          <NavigationMenu.Trigger>
            Men’s Fashion
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <NavigationMenu.Link href='/'>
              Jackets
            </NavigationMenu.Link>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item className='keen-slider__slide flex py-1 items-center'>
          <NavigationMenu.Link href='/'>
            Electronics
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className='keen-slider__slide flex py-1 items-center'>
          <NavigationMenu.Link href='/'>
            Home & Lifestyle
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className='keen-slider__slide flex py-1 items-center'>
          <NavigationMenu.Link href='/'>
            Medicine
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className='keen-slider__slide flex py-1 items-center'>
          <NavigationMenu.Link href='/'>
            Baby’s & Toys
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className='keen-slider__slide flex py-1 items-center'>
          <NavigationMenu.Link href='/'>
            Groceries & Pets
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className='keen-slider__slide flex py-1 items-center'>
          <NavigationMenu.Link href='/'>
            Health & Beauty
          </NavigationMenu.Link>
        </NavigationMenu.Item>



        <NavigationMenu.Indicator />
      </NavigationMenu.List>

      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  )
}