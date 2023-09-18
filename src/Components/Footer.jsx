import React from 'react'
import './Footer.css'
import facebook from '../Assets/facebook.png'
import instagram from '../Assets/instagram.png'
import whatsapp from '../Assets/whatsapp.png'
import youtube from '../Assets/youtube.png'

const Footer = () => {
  return (
    <div className='footer-outer-div'>
        <div className="logootext">GETFIT</div>
        <div className="footerpara">Nothing will work unless you do</div>
        <div className="footerfollowtext">follow us</div>
        <div className="socialicons">
            <div className="pngimg"><img src={facebook} alt="" /></div>
            <div className="pngimg"><img src={instagram} alt="" /></div>
            <div className="pngimg"><img src={whatsapp} alt="" /></div>
            <div className="pngimg"><img src={youtube} alt="" /></div>
        </div>
        <div className="copyrighttext">Copyright © 2010-2023 GETFIT All rights reserved.</div>
    </div>
  )
}

export default Footer