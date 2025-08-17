import React from 'react'
import { useContext } from 'react'
import { Mycontext } from './componentA'
import './ComponentD.css'
function ComponentD() {
    const user=useContext(Mycontext);
  return (
    <div className='d'>
        <h1>Component D</h1>
        <h2>Bye {user}</h2>
    </div>
  )
}

export default ComponentD