import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Mainsidebar() {
  const navigate = useNavigate()
  return (
    <div className='font-bold text-xs ml-8 text-gray-800 w-45'>
        <div className='border-b border-gray-300'>
        <img src="/images/passport.jpeg" alt="" className='ml-9 w-16 h-16 rounded-full' />
        <p className='text-xl'>OHAM PRECIOUS IFESINACHI UGOEZE</p>
        
        <p className='text-gray-500 ml-12 mt-1'>100 LEVEL</p>
        <button className='bg-gray-200 p-2 pl-8 pr-8 rounded-lg mb-5 mt-5' onClick={ () => navigate('/student-profile')}>Update Profile</button>
        </div>
        <div className='space-y-4 mt-6'>
            <p className='text-gray-500' >MOBILE PHONE <p className='text-gray-800'>08102435072</p></p>
            <p className='text-gray-500'>EMAIL ADDRESS <p className='text-gray-800' >ohamamanda@gmail.com</p></p>
            <p className='text-gray-500'>PERMANENT ADDRESS <p className='text-gray-800'>NO 1 EBERE LANE TIMBER ROAD OYIGBO RIVERS STATE</p></p>
            <p className='text-gray-500'>MATRIC NO <p className='text-gray-800'>202550431653EF</p></p>
            <p className='text-gray-500'>DEPARTMENT <p className='text-gray-800'>GENETICS AND BIOTECHNOLOGY</p></p>
            <p className='text-gray-500'>STUDENT TYPE <p className='text-gray-800'>UG Regular</p></p>
        </div>
        <button className='text-white mt-40 bg-red-600 p-4 font-normal'  onClick={ () => navigate('/*')}>Chat</button>
    </div>
  )
}
