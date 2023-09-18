import React from 'react'
import'./Explorecmp.css'
import { Link } from 'react-router-dom'

const Explorecmp = () => {
  return (
    <div className='explore-outer-div'>
        <div className="text-explore">Explore the workout based on target muscle</div>
        <div className="explore-button">
                <Link to="/muscles"><button>Explore now</button></Link>
        </div>
    </div>
  )
}

export default Explorecmp