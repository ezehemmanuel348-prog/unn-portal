import React from 'react'
import './app.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx'
import Mainportalpage from './pages/mainportalpage.jsx';
import Studentprofile from './pages/studentprofile.jsx';
import Error from './pages/error.jsx';

function App() {
  
  return (
     <div>
       <Navbar/>
      <Routes>  
        <Route path='/student-profile' element={<Studentprofile/>} />
        <Route path='/' element={<Mainportalpage/>} />
        <Route path='/*' element={<Error/>} />'
      </Routes>
     </div>
  )
}

export default App
