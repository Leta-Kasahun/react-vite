import React, { Component } from 'react';
import'./Cardprobs.css'
class Card extends Component {
    render() {
        return (
            <div>
        <div className="testmonial-container">
        <h1 className='stud-testmonial'>Student Testimonial Card</h1><br />
        <h3 className='stud-data'>Hello, I am {this.props.name}
        <br /> I am {this.props.departmet} student <br /> I am from {this.props.address}<br />I am {this.props.batch} year batch</h3>

      </div>

            </div>
        );
    }
}

export default Card;