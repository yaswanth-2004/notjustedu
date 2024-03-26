import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import './App.css'
import Courses from '../components/Courses.jsx'
import Home from '../components/Home.jsx'
import { BrowserRouter as  Router,Routes,Route } from 'react-router-dom'
import Fullcourse from './pages/Fullcourse.jsx'


function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Fullcourse/>} path='/fullcourse'/>
      </Routes>
    </Router>
    
  )
}

export default App
