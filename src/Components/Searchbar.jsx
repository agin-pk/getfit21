import React, { useEffect, useState } from 'react'
import './Searchbar.css'
import { exerciseOptions,fetchData } from '../utils/fetchData'
import Searchresults from './Searchresults'
import Allresult from './Allresult'

const Searchbar = () => {

  const [allExercise,setallExercisedata]=useState([])
  const [search, setsearch] = useState('')
  const [exercises, setExercises] = useState([])
  const [conditions,setConditions] = useState(true)

  const tempexercise = allExercise.slice(0,8);

  useEffect(()=>{
    const fetchDataAndSetState = async () => {
      try {
        const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        setallExercisedata(exerciseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDataAndSetState();
  },[])



  const handleSearch = ()=>{
    if(search){
        const searchedExercises =  allExercise.filter((exercise)=>
        exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
        );
        setExercises(searchedExercises)
    }
    console.log("exercises",exercises)
    setConditions(false)
    setsearch('')

  }
  return (
    <>
    <div className='searchbar-outer-div'>
        <div className="search-head-text">
            Awesome Exercises you <br></br>should know
        </div>
        <div className="input-elements">
            <div className="search-text">
             <input value={search} onChange={(e)=>setsearch(e.target.value.toLowerCase())} type="text" name="" id="" />
            </div>
            <div className="search-button">
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    </div>
    
    {allExercise && conditions===true?<Allresult allExercise={tempexercise} />:exercises?<Searchresults exercises={exercises}/>:null}
    </>
  )
}

export default Searchbar