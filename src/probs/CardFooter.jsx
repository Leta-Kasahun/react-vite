import React, { Component } from 'react'
import './Cardprobs'
class CardFooter extends Component {
  render() {
    return (
      <div>
        <h4 className='card-sutitle'>Descrebtions of props</h4>
              <p className='probs-desc'>This is example and real world usages of props, It is used to make reusable our react codes by passing data from parents to the children it uses this dot probs keywords </p>
              <footer className='card-footer'>&copy; studen testimonial card {new Date().getFullYear()}. All rights reseved</footer>
      </div>
    )
  }
}

export default CardFooter;
