'use client';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { IconCircleFilled, IconMenu2, IconPhone } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';
import Menubar from './menubar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

// Define menu items in a JSON object
const menuItems = [
  { label: 'Home', link: '#' },
  { label: 'Live Sessions', link: '#', subMenuItems: ['Bhagvad Gita', 'Sant Sarita', 'Vedant Samhita', 'Bodh Pratyusha'] },
  { label: 'Video Series', link: '#' },
  { label: 'AP Books', link: '#' },
  { label: 'AP Articles', link: '#' },
  { label: 'Invite', link: '#', subMenuItems: ['For a talk', 'For an interview'] },
  { label: 'In Media', link: '#' },
  { label: 'Careers', link: '#' },
  { label: 'Donate', link: '#' },
];

export default function Header() {
  return (
    <div className="">
      <div className='flex justify-between items-center p-2 bg-orange-700 text-white'>
        <div className="flex justify-between items-center">
          <Avatar className='mx-3 h-8 w-8'>
            <AvatarImage src="https://acharyaprashant.org/images/ic_favicon.png" alt='Prashant Sir' />
          </Avatar>
          {/* Mapping over menuItems */}
          <div className=" hidden md:block md:flex md:justify-between md:items-center">
            {menuItems.map((menuItem, index) => (
              <React.Fragment key={index}>
                {menuItem.subMenuItems ? (
                  <NavigationMenu>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className='bg-orange-700'>{menuItem.label}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="flex flex-col w-40 p-2 space-y-2 cursor-pointer">
                          {menuItem.subMenuItems.map((subMenuItem, subIndex) => (
                            <NavigationMenuItem className='hover:bg-orange-100 p-1' key={subIndex}>{subMenuItem}</NavigationMenuItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenu>
                ) : (
                  // If no subMenuItems, render a simple link
                  <Link href={menuItem.link} className="text-sm font-medium leading-none px-2 ">{menuItem.label}</Link>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <small className='md:hidden border p-1 border-white border-solid mx-2 rounded-md'>
            Donate
          </small>
          <NavigationMenu className='mx-1'>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='bg-orange-700 '>
                <small className='border border-solid px-1'>
                  EN
                </small>
              </NavigationMenuTrigger>
              <NavigationMenuContent className='flex flex-col w-40 p-2 space-y-2 '>
                <NavigationMenuItem className='hover:bg-orange-100 cursor-pointer p-1'>Hindi</NavigationMenuItem>
                <NavigationMenuItem className='hover:bg-orange-100 cursor-pointer p-1'>English</NavigationMenuItem>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenu>

          <IconPhone className='mx-3 hidden lg:block' />
          <Sheet>
            <SheetTrigger asChild>
              <IconMenu2 />
            </SheetTrigger>
            <SheetContent>
              <Menubar />
            </SheetContent>
          </Sheet>
          <small className='text-sm font-medium leading-none px-2 hidden lg:block'>
            Menu
          </small>
        </div>
      </div>
      <div className="flex  lg:justify-center items-center bg-slate-800 text-white p-2">
        <div className="mr-2 mt-0.5 h-4 w-4 shrink-0 rounded-full border border-white bg-red-600 laptop:mt-0"></div>
        <div className="text-lg font-semibold mx-2">Acharya Prashant is dedicated to building a brighter future for you
        </div>
        <div className="border border-solid text-sm font-medium leading-none p-2 lg:ml-1 cursor-pointer rounded-md w-2/3 md:w-[10%]  lg:w-[10%] ">Extend your hand</div>
      </div>
    </div>
  );
}
