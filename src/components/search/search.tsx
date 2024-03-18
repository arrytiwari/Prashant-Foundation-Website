import Image from 'next/image'
import React from 'react'
import SearchBar from './searchbar'
import { Button } from '../ui/button'

export default function Search() {
  return (
    <div className='flex justify-between items-center border-b-2 py-3 px-4'>
        <div className="flex items-center">
        <img src="https://acharyaprashant.org/images/ic_videoseries.png" alt="Prashant Sir" width={100} height={100} />
        <SearchBar />
        </div>
        <Button className='bg-orange-600 h-8 w-16'>
            Login
        </Button>
        </div>
  )
}
