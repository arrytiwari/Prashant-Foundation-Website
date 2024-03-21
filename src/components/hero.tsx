import React from 'react'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from './ui/breadcrumb'
import Image from 'next/image'
import { AspectRatio } from './ui/aspect-ratio'

export default function Hero() {
  return (
    <div className='px-6 mt-2 mb-4'>
        <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/about">संतवाणी</BreadcrumbLink>
        </BreadcrumbItem>
        </BreadcrumbList>
        </Breadcrumb>

        <h1 className='text-2xl font-bold my-2'>संतवाणी</h1>
        <div className="flex  my-3">
       
            <img src='https://cimg.acharyaprashant.org/images/img-4337ee73-d8a3-4c8b-951b-d09a5a6468d3/10/image.jpg' alt="Image" className='w-[1000px] h-[250px]'  />
       
<div className="grid-cols-1 pl-3">
<h1 className='text-xl font-semibold'>
संतों की सीख पर आधारित श्रृंखला
</h1>
<p className='text-[17px]'>
जब-जब समाज में धर्म के प्रति अनादर बढ़ा है और आम-आदमी की चेतना को पाखंड ने घेरा है, तब-तब संतों ने अपने वचनों से हमारे मन को शीतलता प्रदान की है और सामाजिक चेतना को शुद्ध किया है। इस श्रृंखला में आचार्य जी ने संत कबीरदास, तुलसीदास, पलटूदास, दादू दयाल, सहजोबाई, मलूकदास, दरियादास, रविदास आदि संतों की वाणी पर चर्चा की है। जानिए उनके वचनों की जीवन में सार्थकता को आचार्य प्रशांत के साथ इस आसान वीडियो कोर्स में।
</p>
</div>
            
        </div>
 
 <small>
 Share this series:
 </small>
        <div className="flex space-x-8 mt-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="34" viewBox="0 0 19 34" className="h-6 w-7"><g fill="none" fill-rule="evenodd"><path d="M0 0h19v34H0z"></path><path fill="#3E6FA7" stroke="#3E6FA7" stroke-width="1.393" d="M12.074 33H6.23l-.133-14.297H1V13.13h5.102l-.005-4.52C6.096 4.02 9.3 1 14.16 1l3.84.23v5.296h-3.394c-1.892 0-2.532 1.342-2.532 2.81v3.795h5.666l-.765 5.572h-4.9z"></path></g></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="34" viewBox="0 0 38 34" className="h-6 w-7"><g fill="none" fill-rule="evenodd"><path d="M0 0h38v34H0z"></path><path fill="#08BBEE" d="M5.213 20.363a7.25 7.25 0 0 0 3.634-.251c-3.548-.578-6.262-3.748-6.262-7.572q0-.09.002-.178a7.2 7.2 0 0 0 3.551.995c-2.13-1.348-3.553-3.773-3.553-6.542a7.8 7.8 0 0 1 1.05-3.931c3.78 4.663 9.323 7.75 15.572 8.17a8 8 0 0 1-.175-1.683c0-4.347 3.415-7.871 7.629-7.871 2.201 0 4.184.962 5.577 2.5a11.8 11.8 0 0 0 4.735-1.898A7.4 7.4 0 0 1 33.728 6.4 12.5 12.5 0 0 0 38 5.19a12.9 12.9 0 0 1-3.712 4.008l.002.173-.004.896c0 12.279-9.647 22.233-21.549 22.233-4.329 0-8.36-1.317-11.737-3.584q.9.108 1.83.109c3.585 0 6.89-1.24 9.532-3.326-3.384 0-6.193-2.242-7.149-5.336"></path></g></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="34" viewBox="0 0 32 34" className="h-6 w-7"><g fill="none" fill-rule="evenodd"><path d="M0 0h32v34H0z"></path><path fill="#06BA27" d="M15.218 1.019c9.364-.445 17.065 7.145 16.774 16.455-.271 8.685-7.533 15.584-16.24 15.452A16 16 0 0 1 9.4 31.509l-.524-.249L.208 33l1.534-8.787A15.9 15.9 0 0 1 0 17.013C-.026 8.503 6.698 1.423 15.218 1.02m.781 3.098a13.06 13.06 0 0 0-9.205 3.804 12.9 12.9 0 0 0-3.812 9.184c0 1.889.393 3.7 1.17 5.392l.245.504.576 1.125-1.084 5.248 5.147-1.217 1.17.58a12.9 12.9 0 0 0 5.793 1.355 12.94 12.94 0 0 0 9.204-3.804 13 13 0 0 0 3.813-9.183c0-3.47-1.354-6.731-3.812-9.184a12.95 12.95 0 0 0-9.205-3.804M9.985 9.543a1.158 1.158 0 0 1 1.729.269l.075.143 1.304 2.943c.147.331.128.709-.044 1.02l-.098.15-.662.854c-.279.36-.316.854-.09 1.249.788 1.368 3.872 4.104 5.338 4.696.37.15.788.088 1.1-.147l.128-.111.758-.77c.26-.265.628-.386.989-.334l.154.033 3.1.888a1.152 1.152 0 0 1 .654 1.727c-.606.955-1.568 2.12-2.771 2.41-2.121.514-5.38.013-9.447-3.775-3.522-3.28-4.453-6.01-4.233-8.177.125-1.23 1.15-2.338 2.016-3.068"></path></g></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" className="h-6 w-7"><g fill="none" fill-rule="evenodd"><path d="M0 0h35v34H0z"></path><path fill="#0A66C2" fill-rule="nonzero" d="M3.99 8.956c2.172 0 3.99-1.812 3.99-3.978S6.161 1 3.99 1 0 2.812 0 4.978s1.817 3.978 3.99 3.978M.665 33h6.65V10.9H.664zM25.71 10.282c-2.926 0-5.143 1.06-6.34 2.696V10.9h-6.649V33h6.65V20.934c0-3.138 1.684-4.553 4.122-4.553 2.128 0 3.857 1.282 3.857 4.022V33H34V19.43c0-5.966-3.812-9.148-8.29-9.148"></path></g></svg>
        </div>
    </div>
  )
}