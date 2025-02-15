import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Portfolio from './pages/Portfolio'
import ContactMe from './pages/ContactMe'
import Aboutme from './pages/Aboutme'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Error from './pages/Error'


const App = () => {

  const location = useLocation()
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<ContactMe/>}/>
        <Route path='/about' element = {<Aboutme/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      {location.pathname !== '/contact' && <Footer/>}
    </>
  )
}

export default App
