import React from 'react'
import "../ComponentStyles/ContactSectionStyle.css"
import emailjs from "emailjs-com"
import {BsWhatsapp} from "react-icons/bs"
const Contact = () => {

    const sendEmail = (e)=>{
         e.preventDefault()

         emailjs.sendForm('service_3khdfrr','template_jq8aifh',e.target,'YNMZO6LAer2wxO59I')
         e.target.reset()
    }

  return (
    <>
    <div className='contact_section'>
        <h2 className='contact_heading'>Contact</h2>
    </div>
        <hr/>
        <div className='container contact_container'>
            <div className='row'>
                <div className='col-12 email_section'>
                <form onSubmit={sendEmail}>
                <div className='row pt-5 mx-auto'>
                <div className='col-8 pt-2 mx-auto'>
                    <input type="text" className='form-control bg-dark text-white ' placeholder='Name' name='name'/>
                </div>
                <div className='col-8 pt-2 mx-auto'>
                    <input type="email" className='form-control bg-dark text-white' placeholder='Your Email Address' name='email'/>
                </div>
                <div className='col-8 pt-2 mx-auto'>
                    <input type="text" className='form-control bg-dark text-white' placeholder='Subject' name='subject'/>
                </div>
                <div className='col-8 pt-2 mx-auto'>
                    <textarea className='form-control bg-dark text-white' cols="30" rows="8" placeholder='Your message' name='message'/>
                </div>
                <div className='col-8 pt-2 mx-auto text-center'>
                    <input type="submit" className='message-btn btn btn-info' value="send message"/>
                </div>
                </div>
            </form>
                </div>
            </div>
        </div>
        </>
  )
}

export default Contact