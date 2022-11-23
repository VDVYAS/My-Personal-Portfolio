import React, { useState } from 'react'
import './Menu.css'
import squre from '../../assets/square.png'
import { Link } from 'react-scroll'
const  Menu = () => {
  const mobilewidth =window.innerWidth<=500 ? true :false;
  const [menuOpened,SetMenuOpened] =useState(false)
  return (
    <div className='nav'>
      <div className="logo">
        VD
      </div>
      
        {(menuOpened=== false && mobilewidth==true)?
       <div onClick={()=>SetMenuOpened(true)}style= {{textAlign : "end"}}><img src={squre} alt="" className='bars' /></div> 
       :<div className="navmenu">
       <ul className="nav-list">
       <li> <hr id='First'/> <Link
        onClick={()=>SetMenuOpened(false)}
        to='Home'
        span={true}
        smooth={true}
       > Home</Link> <hr  id='Second' /></li>
       <li ><hr id='First'/> <Link
        onClick={()=>SetMenuOpened(false)}
        to='Skill'
        span={true}
        smooth={true}
       >skills</Link><hr  id='Second' /></li>
       <li ><hr id='First'/> <Link
        onClick={()=>SetMenuOpened(false)}
        to='About'
        span={true}
        smooth={true}
       >About</Link><hr  id='Second' /></li>
       <li onClick={()=>SetMenuOpened(false)} className='Contact'><hr id='First'/> <Link
        onClick={()=>SetMenuOpened(false)}
        to='Contact'
        span={true}
        smooth={true}
       >Contact</Link><hr  id='Second' /></li>
       </ul>
       </div>
      }
        
      
    </div>
  )
}

export default Menu
