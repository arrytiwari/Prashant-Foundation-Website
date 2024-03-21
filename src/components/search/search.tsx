'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import SearchBar from './searchbar';
import { Button } from '../ui/button';
import { IconSearch, IconX } from '@tabler/icons-react';

export default function Search() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchVisible(true);
  };

  const handleCrossIconClick = () => {
    setIsSearchVisible(false);
  };

  return (
    <div className='flex justify-between items-center border-b-2 py-3 px-4'>
      <div className="flex items-center">
        <img src="https://acharyaprashant.org/images/ic_videoseries.png" alt="Prashant Sir" width={100} height={100} className='ml-1 mr-2'/>
        {/* Desktop search bar */}
      
          <SearchBar />
        
      
      </div>
      <div className="flex items-center space-x-3">
      <div className={`flex items-center lg:hidden ${isSearchVisible ? 'w-full' : 'w-10'}`}>
          <div className={`w-10 h-10 bg-white border-r-0 border-gray-300 flex items-center justify-center ${isSearchVisible ? 'hidden' : 'block'}`}>
            <IconSearch size={15} className='cursor-pointer' onClick={handleSearchIconClick} />
          </div>
          {isSearchVisible && (
            <input type="text" className="w-full h-10 px-2  border-gray-300 rounded-none border outline-none rounded-l-md" placeholder="Search" />
          )}
          {isSearchVisible && (
            <div className="w-10 h-10 bg-white border-l-0 border-gray-300 flex items-center justify-center" onClick={handleCrossIconClick}>
              <IconX size={15} />
            </div>
          )}
        </div>
        <Button className='bg-orange-600 h-8 w-16'>
          Login
        </Button>
      </div>
    </div>
  );
}