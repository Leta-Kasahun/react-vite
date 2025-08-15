import React from 'react'
import { useState } from 'react'

function ShoppingCart() {
  let [name,setname]=useState("");
  let [item,setitem]=useState("");
  let [quantity,setQuantity]=useState();
  let [price,setprice]=useState();
  let [comment,setcomment]=useState("");
  let [totalPrice,setTotalPrice]=useState()

  const handleNameChsnge=(event)=>setname(event.target.value);
  const handleItemChange=(event)=>setitem(event.target.value);
  const handleQuantity=(event)=>setQuantity(event.target.value);
  const handlePrice=(event)=>setprice(event.target.value);
  const handleComment=(event)=>setcomment(event.target.value);
  
  return (
    <div>
     <h1 className='shop-title'style={{textAlign:"center"}}>Welcome {name}!!!</h1>
     <div className='shop-container'style={{display:"flex"}} >
        <section className='input-section'>
         <input type="text" value={name} onChange={handleNameChsnge} placeholder='What is ur name ? '/><br />
         <select value={item} onChange={handleItemChange}>
            <option value="">select Items</option>
            <option value="laptop">Laptop</option>
            <option value="desctop">Desctop</option>
            <option value="shoes">Shoues</option>
            <option value="close">Close</option>
            <option value="mobile">Mobile</option>
         </select><br /><br />
         <input type="number"value={quantity}onChange={handleQuantity}placeholder='Enter the quantity' /><br /><br />
         <input type="number"value={price}onChange={handlePrice} placeholder='how mutch is it ?' /><br /><br />


         <textarea value={comment}onChange={handleComment}placeholder='Do yo have any feedback ?'></textarea>
        </section>
        <section className='output-section'>
       <h3>Item: {item}</h3>
       <h3>Quantity: {quantity}</h3>
       <h3>Price: {price}</h3>
       <h3><button onClick={()=>setTotalPrice((quantity,price)=>quantity*price)}>click</button>&nbsp;&nbsp; Total Price: {totalPrice}</h3>
      <h3>user FeedBack &nbsp; <br />{comment}</h3>
        </section>

     </div>
    </div>
  )
}

export default ShoppingCart