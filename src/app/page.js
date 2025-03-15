import Image from 'next/image'

import React from 'react'
import HomeHeader from './components/HomeHeader'
import SearchWise from '/public/SearchWiselogo.png'
import HomeSearch from './components/HomeSearch'
export default function Home() {
  return (
    <>
    <HomeHeader/>
    <div className='flex flex-col items-center mt-24'>
    <Image src={SearchWise} 
    alt='website logo'
    width={400}
    height={200}
    priority            // warning was showing for priorty and style 
    style={{width:'auto'}}/>

    
    <HomeSearch/>

    </div>

  
    </>
  )
}
