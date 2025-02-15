import React from 'react'
import './FooterContact.scss'

const FooterContact = () => {
  return (
    <>
      <footer>
        <div className="container">
            <div className="foot_page1">
                <div className="foot_left">
                    <p className='foot_p'>© 2024 robiya.com</p>
                </div>
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

export default FooterContact