import React from 'react'
import "../ComponentStyles/RightSection.css"
import {GrMail} from "react-icons/gr"
import {AiOutlineGithub} from "react-icons/ai"

const RightSection = () => {
  return (
    <>
        <div className='right_section'>
          <h2 className='about text-center'>About Me</h2> 
          <hr/>
          <h3 className='intro text-center'>I am <span className='myname'>Anurag Pandey</span>.I live in <span className='my_city'>Noida</span>.I am pursuing my <span className='my_education'>Bachelor of Technology in Computer Science and Engineering</span> from <span className='my_college'> Bharati
           Vidyapeeth's College of Engineering</span>.Currently, I am in second year.My Hobbies are playing outdoor sports and listening to music.
           </h3>
           <div className="container">
              <div className='row'>
                <div className="icon col-md-6">
                <GrMail className='email'/>&nbsp; <span className='emailid'>anuragpandey192000@gmail.com</span>
                </div>
                <div className="icon col-md-6">
                <AiOutlineGithub  className='email'/>&nbsp; <span className='emailid'>Anurag19-Pandey</span>
                </div>
              </div>
           </div>
    </div>
    </>
  )
}

export default RightSection