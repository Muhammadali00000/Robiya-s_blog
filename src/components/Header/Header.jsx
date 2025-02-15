import React from 'react'
import "./header.scss"
import {  useNavigate } from 'react-router-dom'

const Header = () => {

    const Navigate = useNavigate()
  
  return (
    <>
      <header>
      <div className="container">
        <div className="home">
            <div className="home_bigimg">
                <div className="logo">
                <h1 className='bigimg'><span>*</span>ROBIYA’S BLOG</h1>
                </div>
                <p className='home_p'>I write the program code and I write about the code, so take a look :{")"}</p>
            </div>
            <div className="home_btn">
                <button onClick={() => Navigate("/blog")} className='btn'>Read Blog</button>
                <button onClick={() => Navigate("/about") } className='btn2'>About Me</button>
            </div>
            </div>
            </div>
            </header>
    </>
  )
}

export default Header
