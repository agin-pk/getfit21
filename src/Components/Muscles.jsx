import React, { useEffect, useState } from 'react'
import { exerciseOptions,fetchData } from '../utils/fetchData'
import './Muscle.css'
import Card from './Card'

const Muscles = () => {

    const [muscledata , setmuscledata]=useState([])
    const [searchedmuscles , setSearchedmuscles]=useState([])
    const excirse =[]
      useEffect(()=>{
            const fetchDataState = async () => {
            try {
                const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
                setmuscledata(exerciseData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            };
            fetchDataState();
    },[])

    const targetMuscles =["abductors","abs","adductors","biceps","calves","cardiovascular system","delts","forearms","glutes","hamstrings","lats"
    ,"levator scapulae"
    ,"pectorals"
    ,"quads"
    ,"serratus anterior"
    ,"spine"
    ,"traps"
    ,"triceps"
    ,"upper back"]

    const handlechange=(e)=>{
        const newt = e.target.value;
        if(muscledata){
            const getsearchedmuscles =  muscledata.filter((exercise)=>
            exercise.target.toLowerCase().includes(e.target.value)
            )
        setSearchedmuscles(getsearchedmuscles)
        }
        console.log("my new value is",newt)

    }

  return (
    <>
    <div className='muscles-outer-div'>
        <div className="muscle-head-text">Select the muscle</div>
        <div className="option-select">
        <select onChange={handlechange} name="" id="">
            <option disabled selected value="">select</option>
        {targetMuscles.map((item,i)=>(
            <option key={i} value={item}>{item}</option>
        ))}
        </select>
        </div>
    </div>
    <div className='results-outer-div'>
       <div className="cardclass">
        <Card data={searchedmuscles} />
       </div>
    </div>
</>
  )
}

export default Muscles