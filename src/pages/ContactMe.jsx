import React from 'react'
import Nav from '../components/Nav/Nav'
import TelegramForm from '../components/TelegramForm/TelegramForm'
import Info from '../components/Info/Info'
import FooterContact from '../components/FooterContact/FooterContact'

const ContactMe = () => {
  return (
    <div>
      <TelegramForm/>
      <Info/>
      <FooterContact/>
    </div>
  )
}

export default ContactMe
