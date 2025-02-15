import React from 'react'
import "./footer.scss"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';

const Footer = () => {

  const location = useLocation();
  const GitHubIcon = () => { }
  const LinkedInIcon = () => { }
  const TelegramIcon = () => { }
  const YoutubeIcon = () => { }

  return (

    <>
      <footer>
        <div className="container">
          <div className="foot_page">
            <div className="foot_left">
              <p className='foot_p'>© 2024 robiya.com</p>
            </div>
            {location.pathname !== "/contact" && (
              <div className="foot_centre">
                <div className="foot_centre_1">
                  <a
                    href="https://github.com/robiya07"
                    target="_blank"
                    rel="noopener noreferrer"
                  ><FaGithub className='centre'  style={{ width: 25, height: 25, cursor: 'pointer',color:'black' }} />
                  </a>
                </div>
                <div className="foot_centre_1">
                  <a
                    href="https://www.linkedin.com/in/robiya-obidjonova/"
                    target="_blank"
                    rel="noopener noreferrer"
                  ><FaLinkedin className='centre' style={{ width: 25, height: 25, cursor: 'pointer',color:'black' }} /></a>
                </div>
                <div className="foot_centre_1">
                  <a
                    href="https://t.me/robiya_py"
                    target="_blank"
                    rel="noopener noreferrer"
                  ><FaTelegram className='centre' style={{ width: 25, height: 30, cursor: 'pointer', color:'black' }} /></a>
                </div>
                <div className="foot_centre_1">
                  <a
                    href="https://www.youtube.com/@robiyasblog"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube className='centre' style={{ width: 25, height: 25, cursor: 'pointer', color:'black'  }} /></a>
                </div>
              </div>
            )}
            <div className="foot_right">
              <p className='foot_p'>Designed by</p>
              <img className='foot_star' src="/star.png" alt="" />
            </div>

          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer
