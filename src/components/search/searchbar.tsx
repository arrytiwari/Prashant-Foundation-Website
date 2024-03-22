'use client';
import React from 'react'

import { IconCaretDownFilled, IconSearch } from '@tabler/icons-react'

import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from '../ui/menubar'


const menuItems = [
  {
    item:'Vedant - Upanishads',
    subitems:['"Ishavasya Upanishad', 	"Shwetashvtara Upanishad", "Kathopnishad", 	"Niralamba Upanishad", 	"Sarvasara Upanishad"]
  },
{
item :'Other Scriptures',
subitems:["Paramahansa Gita", "Bhagavad Gita", "Ashtavakra Gita", "Yoga Vashishtha", "Avadhoot Gita", "Ribhu Gita", "Vivekchudamani", "Yog Sutra", "Brahma Sutra", "Bhagavad Gita", "Ashtavakra Gita", "Yoga Vashishtha", "Avadhoot Gita", "Ribhu Gita", "Vivekchudamani", "Yog Sutra", "Brahma Sutra"]
},
{
  item:'Saints and masters',
  subitems:['Sant Kabir', 'Sant Ravidas', 'Sant Tulsidas', 'Sant Raidas', 'Sant Ramanand', 'Sant Ramanuj', 'Sant Ravidas', 'Sant Tulsidas', 'Meera Bai' , 'Sant Namdev', 'Sant Eknath', 'Sant Raidas', 'Sant Ramanand', 'Sant Ramanuj']
},
{
  item:'Other Streams',
  subitems:['Buddhism', 'Jainism', 'Sikhism', 'Christianity', 'Islam', 'Sufism', 'Taoism', 'Zen', 'Advaita', 'Dvaita', 'Vishishtadvaita', 'Shaivism', 'Shaktism', 'Vaishnavism', 'Buddhism', 'Jainism', 'Sikhism', 'Christianity', 'Islam', 'Sufism', 'Taoism', 'Zen', 'Advaita', 'Dvaita', 'Vishishtadvaita', 'Shaivism', 'Shaktism', 'Vaishnavism']
},
{
  item:'Life Questions',
  subitems:['Relationships', 'Career' ,'Education', 'Parenting', 'Health', 'Mental Health', 'Spirituality', 'Relationships', 'Career' ,'Education', 'Parenting', 'Health', 'Mental Health', 'Spirituality']
}
];

export default function SearchBar() {
  return (
    <div className="flex items-center w-full hidden sm:block sm:flex">
      <Menubar className='ml-2'>
        <MenubarMenu>
          <MenubarTrigger>
            <div className="flex items-center">
              All
              <IconCaretDownFilled size={15} color='gray' />
            </div>
          </MenubarTrigger>
          <MenubarContent className='bg-white p-2 cursor-pointer'>
            <MenubarItem>
              All 
            </MenubarItem>
            <MenubarItem>
              Vedant - Bhagvad Gita
            </MenubarItem>
            {menuItems.map((menuItem, index) => (
              <MenubarSub key={index}>
                <MenubarSubTrigger>{menuItem.item}</MenubarSubTrigger>
                <MenubarSubContent className='bg-white'>
                  {menuItem.subitems.map((subItem, subIndex) => (
                    <MenubarItem key={subIndex}>{subItem}</MenubarItem>
                  ))}
                </MenubarSubContent>
              </MenubarSub>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <input type="email" placeholder="Search for video series" className='w-[500px] border outline-none p-1'/>
      <IconSearch size={35} className='bg-orange-200 p-2 rounded-br-lg rounded-tr-lg'/>
    </div>
  )
}



