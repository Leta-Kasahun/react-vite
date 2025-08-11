import React, { Component } from 'react'
import Logo from '../assets/react.svg'
import './Cardprobs.css'
class Cardprobs extends Component {
  render() {
     return (
    <div>
      <h1 className='probs-title'>WelCome To Propes In react Vite</h1>
      <img className='probs-logo' src={Logo} alt="" />
    </div>
  );
  }
}
export default Cardprobs;