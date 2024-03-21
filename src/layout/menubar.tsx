'use client';
import { Separator } from '@/components/ui/separator'
import React from 'react'


// { label: 'Home', link: '#' },
// { label: 'Live Sessions', link: '#', subMenuItems: ['Bhagvad Gita', 'Sant Sarita', 'Vedant Samhita', 'Bodh Pratyusha'] },
// { label: 'Video Series', link: '#' },
// { label: 'AP Books', link: '#' },
// { label: 'AP Articles', link: '#' },
// { label: 'Invite', link: '#', subMenuItems: ['For a talk', 'For an interview'] },
// { label: 'In Media', link: '#' },
// { label: 'Careers', link: '#' },
// { label: 'Donate', link: '#' },
const MenuItems = [
'Bhagvad Gita', 'Sant Sarita', 'Vedant Samhita', 'Bodh Pratyusha', 'AP Books', 'AP Articles', 'VideoSeries','AP Circle','Invite for talk', 'Invite For an interview', 'Media and Public Interaction','Contact Us', 'Careers', 'Donate'
];
 
const Moreitems = [
  'PrashantAdvait Foundation','Ghar Ghar Upanishad','About Acharya Prashant'
];

const ExploreCategories = [
  'Vedant-Upanishads','Vedant-Bhagvad Gita','Other Scriptures','Saints and Masters','Other Streams','Live Questions','Technical Support'
];


export default function Menubar() {
  return (
    <div className='overflow-y-auto h-full '>
      <div className="flex items-center cursor-pointer space-x-2 ">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#d24114" viewBox="0 0 36 36" className="fill-curren"><path d="M18.009 35.5q3.584 0 6.755-1.378a17.9 17.9 0 0 0 5.584-3.792 17.8 17.8 0 0 0 3.783-5.575q1.37-3.162 1.369-6.764 0-3.585-1.378-6.755a18 18 0 0 0-3.792-5.593 17.6 17.6 0 0 0-5.584-3.783Q21.576.5 17.991.5t-6.746 1.36a17.7 17.7 0 0 0-5.584 3.783 17.8 17.8 0 0 0-3.792 5.593Q.499 14.406.5 17.991q0 3.603 1.378 6.764A18 18 0 0 0 5.67 30.33a18 18 0 0 0 5.575 3.792q3.162 1.378 6.764 1.378m-.01-2q-3.224 0-6.039-1.201a15.6 15.6 0 0 1-4.945-3.33 15.4 15.4 0 0 1-3.323-4.943Q2.5 21.214 2.5 17.99q0-3.222 1.192-6.036a15.4 15.4 0 0 1 3.323-4.942 15.5 15.5 0 0 1 4.935-3.32Q14.755 2.5 17.98 2.5t6.04 1.192a15.4 15.4 0 0 1 4.945 3.32 15.6 15.6 0 0 1 3.333 4.942Q33.5 14.768 33.5 17.99q.02 3.223-1.183 6.036a15.7 15.7 0 0 1-3.323 4.942 15.4 15.4 0 0 1-4.945 3.33Q21.224 33.502 18 33.5m11.485-4.287-.055-.216q-.468-1.26-2.017-2.45-1.55-1.189-3.963-1.954t-5.458-.766q-3.027 0-5.431.766t-3.954 1.954q-1.549 1.19-2.054 2.432l-.054.234a15.3 15.3 0 0 0 3.63 2.55 20.7 20.7 0 0 0 4.143 1.602q2.08.55 3.72.55 1.657 0 3.729-.55a21 21 0 0 0 4.125-1.594 15.2 15.2 0 0 0 3.639-2.558M17.99 20.981q1.658.018 2.981-.828 1.324-.847 2.108-2.306.783-1.46.783-3.297 0-1.728-.783-3.16a6.3 6.3 0 0 0-2.117-2.298 5.35 5.35 0 0 0-2.972-.864q-1.621 0-2.954.864a6.3 6.3 0 0 0-2.117 2.297q-.783 1.433-.783 3.161 0 1.838.792 3.279.793 1.44 2.108 2.288 1.314.846 2.954.864"></path></svg>
       <small className='text-orange-600'>
        Login
       </small>
      </div>
      <Separator  className="my-3"/>
      {MenuItems.map((menuItem, index) => (
      <div key={index} className="hover:bg-slate-300 cursor-pointer text-[14px] font-medium  p-2">
      {menuItem}
      
      </div>
      ))}
       <Separator  className="my-3"/>
       <div className='font-semibold text-[14px] mb-1 p-2'>More</div>
      {Moreitems.map((menuItem, index) => (
      <div key={index} className="hover:bg-slate-300 cursor-pointer text-[14px] font-medium p-2">
      {menuItem}
      </div>
      ))}
        <Separator  className="my-3"/>
        <div className='font-semibold text-[14px] mb-1 p-2'>Explore Categories</div>
      {ExploreCategories.map((menuItem, index) => (
      <div key={index} className="hover:bg-slate-300 cursor-pointer text-[14px] font-medium p-2">
      {menuItem}
      </div>
      ))}
      </div>
    
  )
}
