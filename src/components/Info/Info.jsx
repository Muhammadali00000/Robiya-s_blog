import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'
import "./info.scss"

const Info = () => {

  const GitHubIcon = () => { }
  const LinkedInIcon = () => { }
  const TelegramIcon = () => { }
  const YoutubeIcon = () => { }


  return (
    <>
      <section className="info">
        <div className="container">


          <div className="info__link">
            <a href="mailto:info@robiya.com">info <span>@</span> robiya.com</a>
            <a href="tel:+998937882277">+998 <span>(93)</span> 788 22 77</a>
          </div>

          <div className="info__icon">
            <a
              href="https://github.com/robiya07"
              target="_blank"
              rel="noopener noreferrer"
            ><FaGithub className='icon_info'  />
            </a>
            <a
              href="https://www.linkedin.com/in/robiya-obidjonova/"
              target="_blank"
              rel="noopener noreferrer"
            ><FaLinkedin className='icon_info'  />
            </a>
            <a
              href="https://t.me/robiya_py"
              target="_blank"
              rel="noopener noreferrer"
            ><FaTelegram className='icon_info'  />
            </a>
            <a
              href="https://www.youtube.com/@robiyasblog"
              target="_blank"
              rel="noopener noreferrer"
            ><BsInstagram className='icon_info'/>
            </a>
          </div>
        </div>


      </section>
    </>
  )
}

export default Info