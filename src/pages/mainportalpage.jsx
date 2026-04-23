import React from 'react'
import Mainsidebar from '../components/mainsidebar'
import Rightbar from '../components/rightbar'



export default function Mainportalpage() {
  return (
    <div className='flex'>
        <Mainsidebar/>
        <Rightbar/>
    </div>
  )
}
