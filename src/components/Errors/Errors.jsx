import React from 'react'
import './Errors.scss'
import { useNavigate } from 'react-router-dom';

const Errors = () => {
  const Navigate = useNavigate();
  return (
    <>
    <section className='error'>
        <div className="container">
            <div className="error__wrapper">
                <div className="error__content">
                <h1 className='error_text' >4 <span>&#123; &#125;</span> 4</h1>
                <div className="error__btn">
                <img className='vector' src="./Vector 1.png" alt="" />
                <button className='error_btn'onClick={() => Navigate('/')} >
                Back to Home
                </button>
                </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Errors
