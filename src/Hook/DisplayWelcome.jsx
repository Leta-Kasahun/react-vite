import { useState } from "react"
import React from 'react'

function DisplayWelcome() {
  let [name, setName]=useState("Guests");
  let [age,setAge]=useState(0);
  const update=()=>setName("Abebe Kebede");
  const increase=()=>setAge(age+1);
  return (
    <div>
   <h1> Welcome &nbsp;{name} </h1>
   <h1>Age: &nbsp;{age}</h1>
   <button onClick={update}>click here</button><br />
   <button onClick={increase}>increase age</button>
    </div>
  )
}

export default DisplayWelcome