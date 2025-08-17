import { createContext, useState, useContext } from 'react'
import React from 'react'
import ComponentB from './componentB'
import './CompenentA.css'

export const Mycontext=createContext();

function ComponentA() {
    let [users,setUsers]=useState("Leta kasahun");
  return (
    <div className='a'>
        <h1>Componenet A</h1>
        <h2>hellow {users}</h2>
      <Mycontext.Provider value={users}>
           <ComponentB/>
        </Mycontext.Provider>  
    </div>
  )
}

export default ComponentA