import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Sidebar() {
    const navigate = useNavigate();
  return (
    <div>
        <div className='flex m-3 justify-between'>
        <div className='flex gap-15'>
            <img src=" /images/passport.jpeg" alt="" className='ml-7 w-16 h-16 rounded-full'/>
        <span className='font-bold text-gray-700 '>
        <p className='text-xl'>OHAM PRECIOUS IFESINACHI UGOEZE</p>
            <span className='flex space-x-1 ml-3 text-sm'>
               <svg width="35" height="25" viewBox="0 0 60 30" xmlns="http://www.w3.org/ 2000/svg">
              <rect x="1"  y="1" width="58"  height="28" rx="14" fill="white"  stroke="#D1D5DB" strokeWidth="2" />
             <line x1="42" y1="10" x2="50" y2="18" stroke="#D1D5DB" strokeWidth="2" /> <line x1="50" y1="10" x2="42" y2="18" stroke="#D1D5DB" strokeWidth="2" />
             <circle  cx="15" cy="15"  r="11" fill="white" stroke="#D1D5DB" strokeWidth="2" />
            </svg>
                 <p>Not a staff</p>
            </span>
       
        </span>
       
        </div>
         <button className='bg-green-950 pl-4 pr-4  h-7 rounded-sm text-white' onClick={ () => navigate('/*')}>Print</button>
        </div>
        <div className='flex p-2 ml-12'>
            <div className='font-bold text-gray-800 mr-8 w-20  '>
                <ol className='text-left space-y-0.5'>
                <li className='text-green-700'> Personal Information</li>
                 <li>Sponsor's Details</li>
                <li> Next of Kin Details </li>
                <li> Programme Details</li>
                <li> Medical History</li>
                 <li>Documents</li>
                </ol>
            </div>
            <div className='border border-gray-400 p-1 font-bold w-full overflow-x-auto space-y-2 '>
               
                <div className=' flex border-b border-gray-400 ml-2'>Tell Us About Yourself <p className='text-red-600 ml-0.5'>*</p></div>
                <div className='ml-2 text-gray-700 '>
                    <p>Full Name</p>

                     <span className='flex w-full gap-2'>
                    <input type="text" value="PRECIOUS" readOnly disabled className='flex-1 bg-gray-100 border p-1 pl-3 border-gray-400 rounded font-normal text-gray-400' />
                     <input type="text" value="IFESINACHI UGOEZE" readOnly disabled className='flex-1 bg-gray-100 border p-1 pl-3 border-gray-400 rounded font-normal  text-gray-400 ' />
                      <input type="text" value="OHAM" readOnly disabled className='flex-1 bg-gray-100 border p-1 pl-3 border-gray-400 rounded font-normal  text-gray-400' />
                    </span>

                    <p className='mt-2'>Gender</p>
                    <label className="flex items-center space-x-2">
                    <input type="radio" checked disabled  className="accent-blue-500"  />
                     <span>Female</span>

                    </label>
                    <label className="flex items-center space-x-2">
                    <input type="radio"  disabled  className="accent-blue-500"  />
                     <span>Male</span>
                    </label>

                    <p className='mt-2'>Date of Birth</p>

                    <input type="text" value="15/09/2006" readOnly disabled className='bg-gray-100 border p-1 pl-3 border-gray-400 rounded font-normal min-w-full  text-gray-400' />

                    <p className='mt-2'>Country</p>

                    <input type="text" value="Nigeria" readOnly disabled className='bg-gray-100 border p-1 pl-3 border-gray-400 rounded font-normal min-w-full  text-gray-400' />

                    <p className='mt-2'>State of Origin</p>

                    <input type="text" value="Imo State" readOnly disabled className='bg-gray-100 border p-1 pl-3 border-gray-400 rounded font-normal min-w-full  text-gray-400' />

                     <p className='mt-2'>LGA Of Origin</p>

                    <input type="text" value="Orlu" readOnly disabled className=' border p-1 pl-3 border-gray-400 rounded font-normal min-w-full  text-gray-400' />

                     <p className='mt-2'>Home Town</p>

                    <input type="text" value="OKPORO" readOnly disabled className='bg-gray-100 border p-1 pl-3 border-gray-400 rounded font-normal min-w-full  text-gray-400' />

                     <p className='mt-2'>Permanent Address</p>

                    <input type="text" value="NO 1 EBERE LANE TIMBER ROAD OYIGBO RIVERS STATE" readOnly disabled className=' border p-1 pl-3 border-gray-400 rounded font-normal min-w-full  text-gray-400' />

                     <p className='mt-2'>Email Address</p>

                    <input type="text" value="ohamamanda@gmail.com" readOnly disabled className='bg-gray-100 border p-1 pl-3 border-gray-400 rounded font-normal min-w-full  text-gray-400' />

                    <p className='mt-2'>Phone Number</p>

                    <input type="text" value="08102435072" readOnly disabled className=' border p-1 pl-3 border-gray-400 rounded font-normal min-w-full  text-gray-400' />

                     <p className='mt-2'>Contact Address</p>

                    <input type="text" value="NO 1 EBERE LANE TIMBER ROAD OYIGBO RIVERS STATE" readOnly disabled className=' border p-1 pl-3 border-gray-400 rounded font-normal min-w-full  text-gray-400' />

                     <p className='mt-2'>Blood Group</p>

                    <input type="text" value="A+" readOnly disabled className=' border p-1 pl-3 border-gray-400 bg-gray-100 rounded font-normal min-w-full text-gray-400' />

                     <p className='mt-2'>Genotype</p>

                    <input type="text" value="AA" readOnly disabled className=' border p-1 pl-3 border-gray-400 bg-gray-100 rounded font-normal min-w-full text-gray-400' />

                     <p className='mt-2'>Religion</p>

                    <input type="text" value="Christainity" readOnly disabled className=' border p-1 pl-3 border-gray-400 bg-gray-100 rounded font-normal min-w-full text-gray-400' />
                    <div className='p-2 flex justify-end'>
                       <button className='bg-green-950 p-2 rounded-sm text-white 'onClick={ () => navigate('/*')}>Save & Continue</button> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
