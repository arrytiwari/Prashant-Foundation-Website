'use client';

import React, { useEffect, useState } from 'react'
import FaqList from './faq-list'



interface Faq {
  question: string;
  answer: string;
}

export default function Faq() {

  const [faq, setFaq] = useState<Faq[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=english');
        const data = await response.json();
        setFaq(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  return (
    <div className='lg:flex lg:px-6 pt-4 space-x-3 mb-4 bg-[#f8fafb]'>
        <div className="w-full lg:w-1/3">
            <h3 className='text-xl font-semibold px-5 pt-5  '>
                FAQs
            </h3>
            <p className='px-5 '>
            Can’t find the answer you’re looking for?  Reach out to our <span className='text-orange-600'>support</span> team.
            </p>
        </div>
        <div className=" w-full lg:w-2/3 pl-3 lg:pl-0">
            
                {faq.map((faq, index) => (
                    <FaqList key={index} question={faq.question} answer={faq.answer} />
                    ))} 
                
            
        </div>
    </div>
  )
}
