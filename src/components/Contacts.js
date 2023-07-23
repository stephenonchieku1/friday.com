import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

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
                   <article className='contact_option'>
                    <RiMessengerLine/>
                    <h4>Messenger</h4>
                    <h5>stephenonchieku1@gmail.com</h5>
                    <a href='https://m.me/stephen.onchieku.39'>Send message</a>
                   </article>
                   <article className='contact_option'>
                    <BsWhatsapp/>
                    <h4>Whatsapp</h4>
                    <h5>+25497913428</h5>
                    <a href='https://api.whatsapp.com/send?phone+25497913428'>Send message</a>
                   </article>
                </div>
             
                <form action="2"></form>
             </div>
    </section>

  )
}

export default Contacts