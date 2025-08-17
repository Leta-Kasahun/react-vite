import React from 'react'
import { useState, useEffect } from 'react'
import './DigitalClock.css'
function DigitalClock() {
  let [time, setTime]=useState(new Date());
  useEffect(()=>{
    const intervalId=setInterval(()=>{
  setTime(new Date());
    },1000);

  //for unmonut
  return ()=>{
    clearInterval(intervalId);
  }  

  },[])

  function timeeFormat(){
    let hours=time.getHours();
    let minute=time.getMinutes();
    let second=time.getSeconds();
    const meridian=(hours>=12)?"PM":"AM";
    hours=hours%12||12;
    return `${padZero(hours)}:${padZero(minute)}:${padZero(second)}:${meridian}`

  }
  function padZero(number){
    return ((number<10)?"0":"")+number;
  }

  return (
    <div className='clock-container'>
      <div className="clock">
        <span>{timeeFormat()}</span>
      </div>
    </div>
  )
}

export default DigitalClock