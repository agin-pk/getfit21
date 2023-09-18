import React from 'react'
import Videobg from './Videobg'
import Banner from './Banner'
import'./Hero.css'

export const Hero = () => {
  return (
    <div className='outer-hero-bg'>
        <div className="hero-videobg">
        <Videobg/>
        </div>
        <div className="hero-banner">
        <Banner/>
        </div>
    </div>
  )
}
