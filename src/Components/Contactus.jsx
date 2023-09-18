import React, { useState } from 'react'
import'./Contactus.css'
import img from '../Assets/women1.png'

const Contactus = () => {

    const [hidemsg , sethidemsg] = useState(false)

    const handleclick = ()=>{
        sethidemsg(true)
    }
  return (
    <>
    <div className="contactus-text">Get in touch</div>
    <div className="contactuspara">Our professional trainers are here for you</div>
    <div className='Contact-outer-div'>
        <div className="rectangle-bg">
            <div className="formclass">
                <form action="">
                    <div className="inputclass">
                    <input type="text" placeholder='Fullname' name="" id="" />
                    </div>
                    <div className="inputclass">
                    <input type="tel" placeholder='Phone Number' name="" id="" />
                    </div>
                    <div className="inputclass">
                    <input type="email" placeholder='Email' name="" id="" />
                    </div>
                    <div className='formbutton'>
                        <button >Submit</button>
                    </div>
                </form>
            </div>
            <div className="image-class">
                <img src={img} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Contactus