import React from 'react'
import "../ComponentStyles/SkillSectionStyle.css"
import {SiMongodb,SiExpress,SiJavascript} from "react-icons/si"
import {IoLogoNodejs} from "react-icons/io"
import {FaReact} from "react-icons/fa"
import {AiFillCheckCircle,AiFillHtml5} from "react-icons/ai"
import {DiCss3} from "react-icons/di"


const SkillSection = () => {
  return (
    <>
    <div className='skill_section'>
        <h2 className='what_i_know'>What I Know ?</h2>
    </div>
        <hr/>
        <div className='container skill_container'>
          <div className="row">
            <div className="skill_heading col-xs-12 col-md-12 col-sm-12 col-lg-12">
            <h3 className='text-center'>Development & Coding</h3>
            </div>
            </div>
              <div className='row'>
                <div className='skills col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                <ul  type="none">
                <li className='list_content'><AiFillCheckCircle className='icons tick'/>&nbsp;C++</li>
                <li className='list_content'><AiFillHtml5 className='icons html'/>&nbsp;HTML5</li>
                <li className='list_content'><DiCss3 className='icons css'/>&nbsp;CSS3</li>
                <li className='list_content'><SiJavascript className='icons javascript'/>&nbsp;Javascript</li> 
                </ul>
                 </div>
                <div className='skills col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                <ul type="none">
                <li className='list_content'><SiMongodb className='icons mongo'/>&nbsp;MongoDb</li>
                <li className='list_content'><IoLogoNodejs className="icons node"/>&nbsp;NodeJS</li>
                <li className='list_content'><SiExpress className="icons express"/>&nbsp;ExpressJS</li>
                <li className='list_content'><FaReact className="icons react"/>&nbsp;ReactJS</li>
              </ul>
            </div>       
         </div>
         </div>
    </>
  )
}

export default SkillSection