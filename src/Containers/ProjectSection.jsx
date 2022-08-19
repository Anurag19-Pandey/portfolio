import React from 'react'
import ProjectCard from '../component/ProjectCard'
import Pic1 from "../images/proj1pic1.png"
import Pic2 from "../images/proj1pic2.png"
import Pic3 from "../images/proj1pic3.png"

import Proj2Pic1 from "../images/proj2pic1.png"
import Proj2Pic2 from "../images/proj2pic2.png"
import Proj2Pic3 from "../images/proj2pic3.png"

import Proj3Pic1 from "../images/proj3pic1.png"
import Proj3Pic2 from "../images/proj3pic2.png"
import Proj3Pic3 from "../images/proj3pic3.png"
import "../ComponentStyles/ProjectSection.css"

const ProjectSection = () => {
  return (
    <div className='project_section'>
    <div className='skill_section'>
        <h2 className='what_i_know'>Projects</h2>
     </div>
        <hr/>
        <div className='container'>
            <div className='row'>
              <div className="col-sm-12 mt-3 col-md-6 col-lg-4">
                <div className='box'>
                <ProjectCard whichApp="Weather" appname="MawSome" projectpic1={Pic1} projectpic2={Pic2} projectpic3={Pic3} description="Mawsome is Weather Forecast Application.Provide you the latest weather updates of your area." websiteLink="https://mausome.herokuapp.com/" html="50" css="9" javascript="41"/>
                </div>
              </div>
              <div className="col-sm-12 mt-3 col-md-6 col-lg-4">
                <div className='box'>
            <ProjectCard whichApp="Covid-19" appname="CCOVID-TRACK" projectpic1={Proj3Pic1} projectpic2={Proj3Pic2} projectpic3={Proj3Pic3} description="Provide Covid-19 state-wise statistics for India and statistics for each ande every country ." websiteLink="https://anurag19-pandey.github.io/CCOVID-TRACK.github.io/index.html" html="45" css="20" javascript="35"/>
                </div>
              </div>
              <div className="col-sm-12 mt-3 col-md-6 col-lg-4">
                <div className='box third'>
                <ProjectCard whichApp="Recepie" appname="BeingFoodie !" projectpic1={Proj2Pic1} projectpic2={Proj2Pic2} projectpic3={Proj2Pic3} description="Watch and learn all the trendiest recepies around the globe and become a master." websiteLink="https://anurag19-pandey.github.io/BeingFoodie.github.io/index.html" html="50" css="9" javascript="41"/>
                </div>
              </div>
        </div>
        </div>
        </div>
  )
}

export default ProjectSection