import React from 'react'
import { useContext } from 'react'
import { Mycontext } from './componentA'
import ComponentD from './componentD'

function ComponentC() {
    const user=useContext(Mycontext);
  return (
    <div>
        <h1>Component C</h1>
        <h2>hellow Again {user}</h2>
        <ComponentD/>
        </div>
  )
}

export default ComponentC