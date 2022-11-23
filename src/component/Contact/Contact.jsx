import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
export const Contact = () => {
    
  return (
    
    <>
    <div className="contact" id='Contact'>
        <div className="contact-heading">Contact me <hr className="contact-line" /></div>
        <form   >
            <input type="text" aria-label='First Name' placeholder='First Name'/>
            <input type="text" aria-label='Last Name' placeholder='Last Name'/>
            <input type="email" name='to_name' aria-label='E-mail' placeholder='E-mail'/>
            <input type="text"  aria-label='Message'placeholder='Write you message...'/>
            <button type='submit' className='contact-submit'>Submit</button>
        </form>
    </div>
    </>
  )
}
