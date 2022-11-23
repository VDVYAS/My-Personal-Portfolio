import React from 'react'
import './About.css'
export const About = () => {
  return (
   <>
   <div className="about" id='About'>
    <div className="about-heading">About me <hr className='about-line'/></div>
    <div className="about-intro">Hey,I am <span>Vedant Vyas</span> And i am front-end web devloper. I have 2 years of experince in this field.
    i have added my experience level or skill level on the particular programming language. I'm also interested in exploring art and quite good at playing kabaddi and cricket. Currently, i am open to work!</div>
    <div className="project"><button className='about-proj'>Project</button></div>
   </div>
   </>
  )
}
