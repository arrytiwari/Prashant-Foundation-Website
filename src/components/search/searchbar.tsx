'use client';
import React from 'react'
import { Command, CommandInput } from '../ui/command'
import { Input } from '../ui/input'
import { IconCaretDownFilled, IconSearch } from '@tabler/icons-react'
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator, MenubarSub, MenubarSubTrigger, MenubarSubContent } from '@radix-ui/react-menubar'
import { MenubarShortcut } from '../ui/menubar'

export default function SearchBar() {
  return (
    
<div className="flex items-center">
<Menubar className='ml-2'>
      <MenubarMenu>
        <div className="flex items-center p-1 border border-solid">
        <MenubarTrigger>All</MenubarTrigger>
        <IconCaretDownFilled size={15} color='gray' />
        </div>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
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
<Input type="email" placeholder="Email" />
<IconSearch size={35} className='bg-orange-200 p-2 rounded-br-lg rounded-tr-lg'/>
</div>
  )
}
