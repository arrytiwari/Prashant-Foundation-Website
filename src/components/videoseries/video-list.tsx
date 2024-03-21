import React from 'react'
import { Badge } from '../ui/badge'
import { Separator } from '../ui/separator'

export default function VideoList() {
  return (
    <div className='cursor-pointer hover:bg-slate-400 space-y-1 pb-4 '>
        <Badge  className='text-white bg-slate-400 my-2'>
        Bhag 1
        </Badge>
        <h1 className='text-[16px] font-semibold '>
            The Upanishads
        </h1>
        <h2 className='text-[14px] font-light'>
            The Upanishads are the ancient texts that contain 
        </h2>
        <h2 className='text-[14px] font-light'>
            2 hours 30 minutes
        </h2>
        <h2 className='text-[14px] font-light pb-2'>
            Contribution : $10 <span className='line-through'> 800</span> 
        </h2>
        <Badge className='bg-blue-300 text-black '>
            Hindi
        </Badge>
        <div className="flex items-center pt-2 ">
            <small className='text-orange-600'>ADD TO CART</small>
            <Separator orientation="vertical" className='mx-2'/>
            <small className='text-orange-600'>SHARE</small>
        </div>
        <Separator my-2 />
        </div>
  )
}
