import React from 'react'
import { Separator } from '../ui/separator'
import VideoList from './video-list'

export default function VideoSeries() {
  return (
    <div className='px-6 mt-2 '>
       <h1 className='text-xl font-semibold py-2 '>
         Video Series (8)
       </h1>
       <Separator my-2 />
       <div className="grid grid-cols-3 ">
       <VideoList />
       <VideoList />
       <VideoList />
       <VideoList />
       <VideoList />
       <VideoList />
       </div>
    </div>
  )
}
