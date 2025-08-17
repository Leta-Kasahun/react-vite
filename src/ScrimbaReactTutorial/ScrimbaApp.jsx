import img from '../assets/vite.svg'
import React from 'react'
import FristChallange from './Intro/FristChallange'
import Intro from './propes/Intro'
import DestructuringProbs from './propes/DestructuringProbs'

function ScrimbaApp() {
  return (
    <div>
       {/* <h1>Fun fact about React vite</h1> 
   <h1>Hello this is full react tutorial by Scrimba networked by freecampcode</h1> */}
   {/* <FristChallange/> */}
   <Intro name="Leta Kasahun"/>
   <DestructuringProbs img={img} name="Abebe"email="Abe@example.com"phone="092837483758"/>
    </div>
  )
}

export default ScrimbaApp