import React, { useState } from 'react'
import'./Card.css'

const Card = ({data}) => {

    const[currentPage,setCurrentpage]=useState(1);
    const recordsperpage = 12;
    const lastIndex = currentPage * recordsperpage;
    const firstIndex = lastIndex -recordsperpage;
    const records = data.slice(firstIndex,lastIndex);
    const npage = Math.ceil(data.length / recordsperpage);

    const pageButtons = [];
    for (let i = 1; i <= npage; i++){
        pageButtons.push(i)
    }
    console.log("number of page",pageButtons)

    const changepage=(n)=>{
        setCurrentpage(n);
    }

  return (
    <>
    {records.map((item,index)=>(
        <div className='card-outer-div' key={index}>
            <div className="bodypart">{item.bodyPart}</div>
            <div className="gif"><img src={item.gifUrl} alt="" /></div>
            <div className="nameex">{item.name}</div>
            <div className='common-card-class'>
                <div className="equipment">Equipment : {item.equipment}</div>
                <div className='target'>Target : {item.target}</div>
            </div>
        </div>
    ))}
    <div className={pageButtons.length>1?"pagination-button":"nopage"}>
        {pageButtons.map((n,i)=>(
            <button onClick={()=>changepage(n)} key={i}>{n}</button>
        ))}
    </div>
    </>
  )
}

export default Card