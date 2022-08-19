import React from 'react'
import Pic1 from "../images/anurag.jpg"
import "../ComponentStyles/LeftSectionStyles.css"

const LeftSection = () => {
  return (
    <>
    <div className='leftsection'>
     <div className='left_section_image'>
      <img src={Pic1} className="image" alt="..."/>
     </div>
    </div>
</>
  )
}

export default LeftSection