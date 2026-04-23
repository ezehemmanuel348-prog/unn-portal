import React from 'react'
import Sidebar from '../components/sidebar.jsx';
import { Outlet } from 'react-router-dom';

export default function Studentprofile() {
  return (
    <div>
      <Sidebar/>
        <Outlet/>
    </div>
  )
}
