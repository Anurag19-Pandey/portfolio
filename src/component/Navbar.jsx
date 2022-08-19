import React,{useState} from 'react'
import {AiOutlineUser,AiOutlineProject,AiOutlineContacts} from 'react-icons/ai'
import {GiSkills} from "react-icons/gi"
import {GrContactInfo} from "react-icons/gr"

import "../ComponentStyles/NavbarStyle.css"

const Navbar = () => {

    const [navbar,setNavbar] = useState("#home")

  return (
    <div className='container container_navbar'>
      <div className='row row_navbar'>
        <div className='column_navbar col-sm-12 col-md-12 col-lg-12'>
        <nav>
        <a href="#home" onClick={()=>setNavbar("#home")}  className={navbar === "#home"?"active":""}><AiOutlineUser className='icon_nav'/><span>&nbsp;Home</span></a>
        <a href="#skills" onClick={()=>setNavbar("#skills")}  className={navbar === "#skills"?"active":""}><GiSkills className='icon_nav'/><span>&nbsp;Skills</span></a>
        <a href="#projects" onClick={()=>setNavbar("#projects")} className={navbar === "#projects"?"active":""}><AiOutlineProject className='icon_nav'/><span>&nbsp;Projects</span></a>
        <a href="#contact" onClick={()=>setNavbar("#contact")} className={navbar === "#contact"?"active":""}><AiOutlineContacts className='icon_nav'/><span>&nbsp;Contacts</span></a>
      </nav>
        </div>
      </div>
    </div>
   
  )
}

export default Navbar