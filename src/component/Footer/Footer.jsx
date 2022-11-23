import React from 'react'
import './Footer.css'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'
export const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="follow">
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
            <img src={twitter} alt="" />
        </div>
        <div className="copyright">copyright@2022 by VD</div>
    </div>
    </>
  )
}
