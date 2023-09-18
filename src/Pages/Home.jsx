import React from 'react'
import Banner from '../Components/Banner'
import Searchbar from '../Components/Searchbar'
import Explorecmp from '../Components/Explorecmp'
import Contactus from '../Components/Contactus'
import Footer from '../Components/Footer'
import { Hero } from '../Components/Hero'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Searchbar/>
        <Explorecmp/>
        <Contactus/>
        <Footer/>
    </div>
  )
}

export default Home