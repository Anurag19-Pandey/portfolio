import React from 'react'
import "../ComponentStyles/ProjectCardStyles.css"

const ProjectCard = ({whichApp,appname,description,projectpic1,projectpic2,projectpic3,websiteLink,html,css,javascript}) => {
  return (
    <>
    <div className="card">
    <div id={appname} className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src={projectpic1} className="project_img1" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={projectpic2} className="project_img1" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={projectpic3} className="project_img1" alt="..."/>
    </div>
  </div>
</div>
 
  <div className="card-body">
    <h5 className="card-title"><span className='app_name'>{appname}</span>&nbsp;<a href={websiteLink} style={{textDecoration:"none"}} data-toggle="tooltip" data-placement="top" title="Live Website" ><span className='circle'>🔴</span> </a></h5>
    <p className="app_type">({whichApp} App)</p>
    <p className="card-text">{description}</p>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
          <div className='skills_used'>🟡Javascript {javascript}%</div>     
          </div>
          <div className="col-md-12 mt-2 col-lg-6">
          <div className='skills_used'>🟠HTML {html}%</div> 
          </div>
          <div className="col-md-12 mt-2 col-lg-6">
          <div className='skills_used'>🔵CSS {css}%</div>

          </div>
      </div>
      
      
       
       </div>
    </div>
    {/* <a  className="btn btn-primary">Live Website</a> */}
  </div>
</>
  )
}

export default ProjectCard