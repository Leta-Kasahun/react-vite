import React from 'react'
import './ComponetB.css'
import ComponentC from './componentC'


function ComponentB() {
  return (
    <div className='b'>
        <h1>Component B</h1>
        <ComponentC/>
    </div>
  )
}

export default ComponentB