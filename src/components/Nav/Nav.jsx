import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./nav.scss";

const Nav = () => {
  
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getPageName = () => {
    switch (location.pathname) {
      case '/blog':
        return 'Blog';
      case '/portfolio':
        return 'Portfolio';
      case '/contact':
        return 'Contact Me';
      case '/about':
        return 'Aboutme';
      default:
        return 'Home';

    }
  };

  const getReplacementLink = () => {
    if (location.pathname !== '/') return <Link onClick={()=>toggleMenu()} className='home_a' to="/">Home</Link>;

    return null;
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="home_page">
          <div className="home_left">
            <Link to="/">
              <img className="home_img" src="/rb.png" alt="Logo" />
            </Link>
          </div>

         
          <button className='home1_a'>{getPageName()}</button>


          
          <div className="burger" onClick={toggleMenu}>
            <span className={menuOpen ? "line open" : "line"}></span>
            <span className={menuOpen ? "line open" : "line"}></span>
            <span className={menuOpen ? "line open" : "line"}></span>
          </div>

          
          <div className={`home_right ${menuOpen ? "open" : ""}`}>
            {location.pathname !== '/blog' ? <Link onClick={()=>toggleMenu()} className='home_a' to="/blog">Blog</Link> : getReplacementLink()}
            {location.pathname !== '/portfolio' ? <Link onClick={()=>toggleMenu()} className='home_a' to="/portfolio">Portfolio</Link> : getReplacementLink()}
            {location.pathname !== '/contact' ? <Link onClick={()=>toggleMenu()} className='home_a' to="/contact">Contact Me</Link> : getReplacementLink()}
            {location.pathname !== '/about' ? <Link onClick={()=>toggleMenu()} className='home_a' to="/about">About Me</Link> : getReplacementLink()}
            <button className="home_translate">Ru | Uz</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
