'use client';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { IconCircleFilled, IconMenu2, IconPhone } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

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
        <Avatar className='mx-3  h-8 w-8'>
          <AvatarImage src="https://acharyaprashant.org/images/ic_favicon.png" alt='Prashant Sir' />
        </Avatar>
        {/* Mapping over menuItems */}
        {menuItems.map((menuItem, index) => (
          <React.Fragment key={index}>
            {menuItem.subMenuItems ? (
              <NavigationMenu >
                <NavigationMenuItem>
                  <NavigationMenuTrigger className='bg-orange-700'>{menuItem.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                  <ul className="flex flex-col w-40 p-2 space-y-2">
                    {menuItem.subMenuItems.map((subMenuItem, subIndex) => (
                      <NavigationMenuItem className='hover:bg-orange-100' key={subIndex}>{subMenuItem}</NavigationMenuItem>
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
      <div className="flex justify-between items-center">
        <NavigationMenu className='mx-1'>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='bg-orange-700 border border-solid ' >EN</NavigationMenuTrigger>
            <NavigationMenuContent className='flex flex-col w-40 p-2 space-y-2'>
              <NavigationMenuItem className='hover:bg-orange-100'>Hindi</NavigationMenuItem>
              <NavigationMenuItem className='hover:bg-orange-100'>English</NavigationMenuItem>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>

        <IconPhone className='mx-3'/>

        <IconMenu2 />

        <small className='text-sm font-medium leading-none px-2 '>
        Menu
        </small>
      </div>
    </div>
    <div className="flex justify-center items-center bg-slate-800 text-white p-2">
    <IconCircleFilled color='red' size={17}/>
    <div className="text-lg font-semibold mx-2">Acharya Prashant is dedicated to building a brighter future for you
</div>
<div className="border border-solid text-sm font-medium leading-none p-2 ml-1 rounded-md">Extend your hand</div>
    </div>
    </div>
  );
}
