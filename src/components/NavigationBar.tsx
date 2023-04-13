"use client";

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';

export function NavigationBar() {
  return (
    <div className=''>
      <NavigationMenu.Root>
        <NavigationMenu.List className=''>
          <NavigationMenu.Item className=''>
            <NavigationMenu.Trigger>
              Woman’s Fashion
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className='float-right'>
              <ul>
                <li>
                  <Link href="/" className=''>Bags</Link>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger>
              Men’s Fashion
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <ul>
                <li>
                  <Link href="/">Jackets</Link>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator />
        </NavigationMenu.List>

        <NavigationMenu.Viewport />
      </NavigationMenu.Root>
      <ul className='flex flex-col'>
        <Link href="/">Electronics</Link>
        <Link href="/">Home & Lifestyle</Link>
        <Link href="/">Medicine</Link>
        <Link href="/">Sports & Outdoor</Link>
        <Link href="/">Baby’s & Toys</Link>
        <Link href="/">Groceries & Pets</Link>
        <Link href="/">Health & Beauty</Link>
      </ul>
    </div>
  )
}