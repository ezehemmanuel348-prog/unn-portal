import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='flex justify-between mt-3 mb-3'> 
    <div className='flex gap-16'>
      <span className='flex gap-5' onClick={ () => navigate('/*')}>
       <svg  width="24" height="24"viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    ><path d="M3 6H21" stroke="currentColor"  strokeWidth="2" strokeLinecap="round"   /><path  d="M3 12H21" stroke="currentColor" strokeWidth="2"strokeLinecap="round"  /><path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /> </svg>

    <span className='flex space-x-2'>
            <img src= "/images/8660488-middle.png"alt="" className='w-6 h-6 rounded-full' />
            <p className='font-bold text-green-600'>University of Nigeria</p>
        </span>

        </span>

        <span className='flex space-x-3 text-gray-800'>
        <p>|</p>
        <p> Profile</p>
       </span>
      </div>

 <div className='flex space-x-40'>
     
        <span className='flex space-x-5' onClick={ () => navigate('/*')}>
        <svg  width="30" height="30" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#D0ECFA" />
      <g transform="rotate(15 20 20)">
        <path
          d="M20 30c1 0 2-.9 2-2h-4c0 1 .9 2 2 2Zm6-6V18.5c0-3-1.7-5.5-4.5-6.2V12a1.5 1.5 0 0 0-3 0v.3C15.7 13 14 15.5 14 18.5V24l-2 2h16l-2-2Z"
          fill="#D0ECFA" stroke="#001F3F" strokeWidth="2"  strokeLinejoin="round"
        />
      </g>
    </svg>
    <img src="/images/passport.jpeg" alt="" className='w-7 h-7 rounded-full' />
        </span>
        </div>
    </div>
  )
}
