import React from 'react'
import'./Banner.css'
import video from '../Assets/bgvideo.mp4';


const Videobg = () => {
  return (
    <div>  
          <video src={video} autoPlay loop muted></video>
    </div>
  )
}

export default Videobg