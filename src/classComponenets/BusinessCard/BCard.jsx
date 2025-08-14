import React, { Component } from 'react'
import './styles.css'

export default class BCard extends Component {
  render() {
    let {nth, name,position, email,phone}=this.props;
    return (
        <div className='card-container'>
      <div className={`card ${nth}-color`}  >
       <h1 className='card-title'>Evangadi INC</h1>
       <h3 className='card-detail'>Name: {name} <br />Position: {position} <br /> Email: {email} <br /> Pnone Number: {phone}</h3>
       </div>
        
      </div>
    )
  }
}
