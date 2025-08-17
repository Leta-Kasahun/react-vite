import React from 'react'
import { useEffect, useState } from 'react'
import './Counter.css'
function Counter() {
    let [count,setCount]=useState(0);
    let [age,setAge]=useState(18);
  //this is always updated if updation function defins in it it becomes infinet
      // useEffect(()=>{
    //     document.title=`Conter: ${count}`
    // })  
//this is updated only once updating inside is not prople
    // useEffect(()=>{
    //     document.title=`Conter: ${count}`
    // },[])

 //this is updated by dependecy and defing or updating insides makes infinite take for this
 useEffect(()=>{
 document.title=`Conter: ${count}`
 },[count])   
  return (
    <div>

      <div className="age-displayer"><h1>Age value: {age}</h1></div>
      <hr />
      <button className='inc-age-btn'onClick={()=>setAge((age)=>age+1)}>Increase Age</button>
      <div className="count-displayer"><h1>Count value: {count}</h1></div>
      <hr />
      <button className='inc-count-btn'onClick={()=>setCount((count)=>count+1)}>Increase Count</button>
    </div>
  )
}

export default Counter