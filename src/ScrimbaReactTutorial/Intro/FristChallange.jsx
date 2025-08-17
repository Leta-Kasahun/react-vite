import React from 'react'
import logo from '../../assets/react.svg'
import './FristChallage.css'

function FristChallange() {
  return (
    <div>
        <header className='header-container'>
           <img  className='logo-img'src={logo} alt="" />
            <ul className='nav-bar'>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </header>
        <h1 className='titles'>Reason I am excited to learn React</h1>
        <p>1. react is popular library , so i will be able to fit with all closeest devs out there!</p>
        <p>2. I am more likely to get as a job as a front end developer if i master React.</p>
    </div>
  )
}

export default FristChallange