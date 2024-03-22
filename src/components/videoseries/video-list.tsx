import React from 'react';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';

interface VideoListProps {
  title: string;
  description: string;
  duration: string;
  originalContribution: number;
  newContribution: number;
  bhag: number;
}

const formatDuration = (duration: string) => {
    const [hoursStr, minutesStr] = duration.split('h');
    const hours = Number(hoursStr);
    const minutes = Number(minutesStr?.trim()) * 60; // Multiply decimal part by 60 to get minutes
  
    return `${hours} hours ` + (minutes > 0 ? `${minutes} minutes` : '');
  }
export default function VideoList({
    title,
    description,
    duration,
    originalContribution,
    newContribution,
    bhag,
  }: VideoListProps) {
    
  
    const formattedDuration = formatDuration(duration);
  
    return (
      <div className='cursor-pointer hover:bg-slate-300 space-y-1 pb-4 rounded-md p-2 border-b-2 mx-1'>
        <Badge className='text-white bg-slate-400 my-2'> भाग {''}{bhag} </Badge>
        <h1 className='text-[16px] font-semibold '> {title} </h1>
        <h2 className='text-[14px] font-light'> {description} </h2>
        <h2 className='text-[14px] font-light'> {formattedDuration} </h2>
        <h2 className='text-[14px] font-light pb-2'>
          Contribution : ₹{newContribution} <span className='line-through ml-1'> ₹{originalContribution}</span>
        </h2>
        <Badge className='bg-blue-300 text-gray-600 '> Hindi </Badge>
        <div className="flex items-center pt-2 ">
          <small className='text-orange-600'>ADD TO CART</small>
          <Separator orientation="vertical" className='mx-2'/>
          <small className='text-orange-600'>SHARE</small>
        </div>
      </div>
    );
  }
  