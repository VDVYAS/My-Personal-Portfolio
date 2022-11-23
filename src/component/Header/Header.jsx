import React from 'react'
import './Header.css'
import Menu from '../MainMenu/Menu'
import vd from '../../assets/vd.png'
const header = () => {
  return (
   <>
   <Menu />
   <div className="header" id='Home'>
     <div className="intro">
      <div className="first-line">
        <span className="i-am">I! m</span>
        <span className="name">Vedant Vyas</span>
      </div>
      <span className="proffesion">Front-end Web Devloper</span>
      <div className="know-more"><button className='know'>Know  More</button> <button className='proj'> Project</button> </div>
     </div>
     <div className="photo">
      <img src={vd} alt="" />
     </div>
     
   </div>
   </>
  )
}

export default header
