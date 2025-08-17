import React from 'react'

function DestructuringProbs(props) {
    let {name,email,phone,img}=props;
  return (
    <div>
   <img src={img} alt="vite" />
   <h1>Name: {name}</h1>
   <h1>Email: {email}</h1>
   <h1>Phone Number: {phone}</h1>
    </div>
  )
}

export default DestructuringProbs