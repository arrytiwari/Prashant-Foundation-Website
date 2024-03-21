import React from 'react'
import FaqList from './faq-list'

export default function Faq() {
  return (
    <div className='flex px-6 pt-4 space-x-3 mb-4 bg-[#f8fafb]'>
        <div className="">
            <h1 className='text-xl font-semibold ml-5  '>
                FAQs
            </h1>
            <p className='ml-5'>
            Can’t find the answer you’re looking for? <br/> Reach out to our <span className='text-orange-600'>support</span> team.
            </p>
        </div>
        <div className="">
            
                
                    <FaqList />
                    <FaqList />
                    <FaqList />
                    <FaqList />
                
            
        </div>
    </div>
  )
}
