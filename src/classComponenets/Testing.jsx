import React, { Component } from 'react';
import './Tst.css'
import logo from '../assets/react.svg'
class Testing extends Component {
    render() {
        return (
            <div>
                <h1>hellow class this is class based components</h1>
                <h2>Good morning class</h2>
                <img className='classBasedlogo' src={logo} alt="" />
                <p>This is the traditionals ways of  react componets. it must be extends Componet class built in react and uses render built in functions to render</p>
                
            </div>
        );
    }
}

export default Testing;