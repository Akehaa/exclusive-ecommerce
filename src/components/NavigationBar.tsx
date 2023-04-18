"use client";

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Popover from '@radix-ui/react-popover';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'


export function NavigationBar() {
  return (
    <NavigationMenu.Root className="text-xs w-32 pl-5 lg:text-base">
      <NavigationMenu.List className=' flex flex-col gap-4 border-r-[1px] border-opacity-30 border-black'>
        <NavigationMenu.Item className='flex justify-between mt-4'>
          <Popover.Root>
            <Popover.Trigger>
              Woman's Fashion
            </Popover.Trigger>
            <Popover.Trigger>
              <MdOutlineKeyboardArrowRight size={24} />
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content side='right' sideOffset={10} className='bg-red-400 flex flex-wrap fixed w-56 h-56 overflow-scroll text-sm gap-3 py-4 pr-4 pl-6 mt-[-1.5rem]'>
                <NavigationMenu.Link href='#'>
                  bagsagsdyhsdysdyts
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Bagshfds
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Bags
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Bagsaras
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Bagsjfgdjkdtyykty
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Bagsgfjdfg
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Bags
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Bags
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Bagsfsd
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Bagshhfsd
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Bags
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Bags
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Bags
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Bags
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Bags
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Bags
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Bags
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Bags
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Bags
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Bags
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Bags
                </NavigationMenu.Link>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </NavigationMenu.Item>

        <NavigationMenu.Item className='flex justify-between'>
          <Popover.Root>
            <Popover.Trigger>
              Men's Fashion
            </Popover.Trigger>
            <Popover.Trigger>
              <MdOutlineKeyboardArrowRight size={24} />
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content side='right' sideOffset={10} className='bg-red-400 flex flex-wrap fixed w-56 h-56 overflow-scroll text-sm gap-3 py-4 pr-4 pl-6 mt-[-4.5rem]'>
                <NavigationMenu.Link href='#'>
                  Jacket
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Jacket
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Jacket
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Jacket
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Jacket
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Jacket
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Jacket
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Jacket
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Jacket
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Jacket
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Jacket
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Jacket
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Jacket
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Jacket
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Jacket
                </NavigationMenu.Link>
                <NavigationMenu.Link href='#'>
                  Jacket
                </NavigationMenu.Link>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href='#'>
            Electronics
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href='#'>
            Home & Lifestyle
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href='#'>
            Medicine
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href='#'>
            Baby’s & Toys
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href='#'>
            Groceries & Pets
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href='#'>
            Health & Beauty
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Indicator />
      </NavigationMenu.List>
      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  )
}