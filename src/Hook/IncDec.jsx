import { useState } from 'react';
import React from 'react'
import './IncDec.css'
function IncDec() {
let [val,setVal]=useState(0);

  return (
    <div className='mnu-container'>
      <h1 className='titl'>Increment deacremt and reset  Using Hook</h1>
      <h1 className='val-space'>{val}</h1>
      <div className='btn-section'>
    <button className='manu-btn bg-green-400' onClick={()=>setVal(val=>val+1)}>+</button>
    <button className=" manu-btn bg-amber-400"onClick={()=>setVal(val=>val-1)}>-</button>
    <button className='manu-btn bg-red-400' onClick={()=>setVal(val=>val=0)}>0</button>
      </div>
    </div>
  )
}

export default IncDec
