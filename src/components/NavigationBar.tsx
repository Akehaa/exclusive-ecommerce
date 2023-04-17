"use client";

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Popover from '@radix-ui/react-popover';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'


export function NavigationBar() {
  return (
    <NavigationMenu.Root className="text-xs border lg:text-base">
      <NavigationMenu.List className=' items-c flex flex-col gap-4 border-r-[1px] border-opacity-30 border-black'>
        <NavigationMenu.Item>
          <Popover.Root>
            <Popover.Trigger className='flex items-center'>
              Woman's Fashion
              <MdOutlineKeyboardArrowRight size={24} />
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content side='right'>
                <NavigationMenu.Link href='#'>
                  Bags
                </NavigationMenu.Link>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Popover.Root>
            <Popover.Trigger className='flex items-center'>
              Mens's Fashion
              <MdOutlineKeyboardArrowRight size={24} />
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content side='right'>
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