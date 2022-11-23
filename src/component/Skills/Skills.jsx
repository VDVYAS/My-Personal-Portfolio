import React from 'react'
import './Skills.css'
export const Skills = () => {
  return (
    <div className="skils" id='Skill'>
        <h2 className='sk'>Skills <hr /></h2>
        <div class="skills">
            <div class="details">
                 <span>HTML</span>
                <span>90%</span>
            </div>
         <div class="bar html">
         <div id="html-bar"></div>
        </div>
    </div>
    <div class="skills">
            <div class="details">
                 <span>CSS</span>
                <span>80%</span>
            </div>
         <div class="bar css">
         <div id="css-bar"></div>
        </div>
    </div>
    <div class="skills">
            <div class="details">
                 <span>JAVASCRIPT</span>
                <span>75%</span>
            </div>
         <div class="bar javascript">
         <div id="javascript-bar"></div>
        </div>
    </div>
    <div class="skills">
            <div class="details ">
                 <span>React JS</span>
                <span>60%</span>
            </div>
         <div class="bar react">
         <div id="react-bar"></div>
        </div>
    </div>
    </div>
  )
}
