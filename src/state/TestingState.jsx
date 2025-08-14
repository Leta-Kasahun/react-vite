import React, { Component } from 'react'

class TestingState extends Component {
    constructor(){
        super();
        this.state={
            greeting:"Hellow this is state",
            name:"Leta Kasahun"
        }
    }
  render() {
    return (
      <div>
       <h1>Inintialaizing state Example</h1> 
       <h2>{this.state.greeting} My name is {this.state}</h2>
      </div>
    )
  }
}
export default TestingState