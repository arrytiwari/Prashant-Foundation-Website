'use client';
import React from 'react'
import { Command, CommandInput } from '../ui/command'
import { Input } from '../ui/input'
import { IconCaretDownFilled, IconSearch } from '@tabler/icons-react'
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator, MenubarSub, MenubarSubTrigger, MenubarSubContent } from '@radix-ui/react-menubar'
import { MenubarShortcut } from '../ui/menubar'




export default function SearchBar() {
  return (
    
<div className="flex items-center w-full hidden sm:block sm:flex">
<Menubar className='ml-2'>
      <MenubarMenu>
      <MenubarTrigger>
        <div className="flex items-center px-2 py-1 border border-solid">
       All
        <IconCaretDownFilled size={15} color='gray' />
        </div>
        </MenubarTrigger>
        <MenubarContent className='bg-white p-2 cursor-pointer'>
          <MenubarItem>
            All 
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent className='bg-white'>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Print... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      </Menubar>
<input type="email" placeholder="Search for video series" className='w-[500px] border outline-none p-1'/>
<IconSearch size={35} className='bg-orange-200 p-2 rounded-br-lg rounded-tr-lg'/>
</div>
  )
}
