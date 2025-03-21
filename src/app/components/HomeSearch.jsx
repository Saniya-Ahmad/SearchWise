'use client'

import { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillMicFill} from 'react-icons/bs'
import {useRouter} from 'next/navigation'


export default function HomeSearch() {
const[input,setInput]= useState('');
// console.log(input);
const router = useRouter();

const [randomSearchLoading, setRandomSearchLoading] = useState(false);

const handleSubmit =(e) => {
  e.preventDefault();
  if(!input.trim()) return;
  router.push(`/search/web?searchTerm=${input}`)
};

//feeling lucky ke liye
const randomSearch=async(e)=>{
  setRandomSearchLoading(true);
  const response=  await fetch('https://random-word-api.vercel.app/api')
  .then((res)=> res.json())
  .then((data) =>data[0]);
  if(!response) return;
  router.push(`/search/web?searchTerm=${response}`);
  setRandomSearchLoading(false);
}
  return (
    <>
    <form 
    onSubmit={handleSubmit}
    className='flex w-full mt-5 mx-auto max-w-[90%] 
                        border border-gray-200 px-5 py-3 
                        rounded-full hover:shadow-md focus-within:shadow-md
                        transition-shadow sm:max-w-xl lg:max-w-2xl'>
        <AiOutlineSearch className='text-xl text-gray-500 mr-3'/>
        <input type='text' className='flex-grow
        focus:outline-none' onChange={e=> setInput(e.target.value)}/>
        <BsFillMicFill className='text-lg'/>
    </form>

    <div className='flex flex-col space-y-2 
                    sm:space-y-0 justify-center sm:flex-row mt-8
                    sm:space-x-4'>
        <button 
        onClick={handleSubmit}
        className='bg-gray-100 rounded-md
        text-sm text text-gray-800 hover:ring-gray-200
        focus:outline-none active:ring-gray-300
        hover:shadow-md w-36 h-10'>Explore More</button>
    
    <button 
     disabled={randomSearchLoading}
    onClick={randomSearch}
    className='bg-gray-100 rounded-md
        text-sm text text-gray-800 hover:ring-gray-200
        focus:outline-none active:ring-gray-300
        hover:shadow-md w-36 h-10'>{randomSearchLoading ? 'Loading...' : 'Feeling lucky'}</button>    
    </div>
      
    </>
  )
}
