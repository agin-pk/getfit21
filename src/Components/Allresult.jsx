import React from 'react'
import Card from './Card'
import './Searchresults.css'


const Allresult = ({allExercise}) => {
  return (
    <div className='results-outer-div'>
        <div className='text1'>Results</div>
        <div className="cardclass">
        <Card data={allExercise}/>
        </div>
    </div>
  )
}

export default Allresult