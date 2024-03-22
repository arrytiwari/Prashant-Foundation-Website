'use client';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@radix-ui/react-separator';
import { IconBrandFacebookFilled, IconBrandInstagram, IconBrandTwitter, IconBrandTwitterFilled, IconBrandWikipedia, IconBrandYoutubeFilled } from '@tabler/icons-react';
import React from 'react'

const LiveEvents = [
   ' Bhagavad Gita',
'Sant Sarita',
'Vedant Samhita',
'Bodh Pratyusha',
];

const WisdomContent = ['Video Series', 'AP Books', 'AP Articles','AP Circle'];
const More=[ 'About Acharya Prashant',
'Invite Him',
'Interview Him',
'Ghar Ghar Upanishad',
'Media and Public Interaction'];

const Contacts=[
    {
        label: 'support@advait.org.in',
        icon: 'IconMail',
    },
    {
        label: '+91 9650585100',
        icon: 'IconWhatsapp',
    },
    {
        label: '+91 9650585100',
        icon: 'IconPhone',
    }

]

export default function Footer() {
  return (
    <div className='bg-slate-800 text-white p-2'>
        <div className="lg:flex  space-y-2 md:flex-row justify-between  items-center px-4">
            <div className="flex-col">
                <h4 className='mb-2'>
                    Live Sessions
                </h4>
                <ul>
                    {LiveEvents.map((event, index) => (
                    <li key={index} className='hover:text-orange-600 text-sm mb-1'>{event}</li>
                    ))}
                </ul>
            </div>
            <div className=" sm:mt-0 mt-4 flex-col">
                <h4 className='pt-3 lg:pt-0 mb-2'>
                    Wisdom Content
                </h4>
                <ul>
                    {WisdomContent.map((content, index) => (
                    <li key={index} className='hover:text-orange-600 text-sm mb-1'>{content}</li>
                    ))}
                </ul>
               </div>
                <div className=" sm:mt-4 mt-0flex-col ">
                 <h4 className='pt-3 lg:pt-0 mb-2'>
                      More
                 </h4>
                 <ul>
                      {More.map((more, index) => (
                      <li key={index} className='hover:text-orange-600 text-sm mb-1'>{more}</li>
                      ))}
                 </ul>
                 </div>
                 <div className=" sm:mt-4 mt-0 flex-col ">
                    <h4 className='pt-3 lg:pt-0  mb-2'>
                        Social Media
                    </h4>
                    <small className='font-semibold mb-2 '>
                    For English
                    </small>
                    <div className="flex space-x-1"><IconBrandYoutubeFilled/> <IconBrandTwitterFilled/><IconBrandFacebookFilled/><IconBrandInstagram/><IconBrandWikipedia/></div>
                    
                    <small className='font-semibold my-2'>
                    For Hindi
                    </small>
                    <div className="flex space-x-1"><IconBrandYoutubeFilled/> <IconBrandTwitterFilled/><IconBrandFacebookFilled/><IconBrandInstagram/><IconBrandWikipedia/></div>
                    
                    </div> 
                    <div className=" sm:mt-4 mt-0 flex-col">
                    <h4 className=' pt-3 lg:pt-0 mb-2'>
                       Download App
                    </h4>
                    <div className="flex items-center space-x-2">
                    <Avatar className='h-8 w-8 mb-2'>
          <AvatarImage src="https://acharyaprashant.org/images/ic_favicon.png" alt='Prashant Sir' />
        </Avatar>
           <small>
            Acharya Prashant
           </small>
                        </div>
                        <div className="flex-col sm:space-y-2 sm:mt-2">
                            <img src="https://acharyaprashant.org/images/ic_googleplay.png" alt="Acharya Prashant" className="h-8 w-25"/>
                            <img src="https://acharyaprashant.org/images/ic_appstore.png" alt="Acharya Prashant" className="h-8 w-25 mt-1"/>
                        </div>
                    </div>
                    <div className="flex-col">
                    <h4 className='sm:mt-0 mt-4 mb-2'>
                        Contact Us
                    </h4>
                    <ul>
                    {Contacts.map((contact, index) => (
                    <li key={index} className='hover:text-orange-600 text-sm mb-1 flex items-center'>{contact.label}</li>
                    ))}
                    </ul>
                    </div>
        </div>
        <Separator  className="my-2 " color='white'/>
        <div className="sm:flex flex-col space-y-2 sm:space-y-0 md:flex-row  justify-center items-center">
        <small>
        Copyright © 2022 PrashantAdvait Foundation
            </small>

            <small  className='ml-4'>
        
Terms & Conditions
|
Privacy Policy
|
Undertaking
            </small>
        </div>
        </div>
  )
}
