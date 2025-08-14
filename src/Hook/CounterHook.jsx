import React, { use } from 'react'
import { useState } from 'react'
import './CounterHook.css'
function CounterHook() {
    let [count,counter]=useState(0);
  return (
    <div>
      <h1 className='count-title bg-blue-800'>Conter using hook</h1>
      <h1 className='display-count bg-amber-500 '>{count}</h1>
      <button className='count-btn bg-green-300 'onClick={()=>counter(count=>count+1)}>Count</button>
    </div>
  );
}

export default CounterHook
