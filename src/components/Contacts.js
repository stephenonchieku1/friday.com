import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from "react-icons/md" 

function Contacts() {
  return (
    <section id='contact'>
             <h5>Get In Touch</h5>
             <h2>Contact Me</h2>
             <div className='container contact_container'>
                <div className='contact_options'>
                   <article className='contact_option'>
                    <MdOutlineEmail/>
                    <h4>Email</h4>
                    <h5>stephenonchieku1@gmail.com</h5>
                    <a href='mailto:stephenonchieku1@gmail.com'>Send message</a>
                   </article>
                </div>
             
                <form action="2"></form>
             </div>
    </section>

  )
}

export default Contacts