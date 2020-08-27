import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faSchool, faDollyFlatbed } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
  let cart = props.AddCart;
  const total = cart.reduce((total, prd) => total + prd.price, 0);

  const checkOut={
    margin:'10px',
    border:'3px solid green',
    padding:'20px'
  }

  return (
    <div style={checkOut}>
      <h4>Total Course: {cart.length}</h4>
      <h2>$ {total.toFixed(2)}</h2>
      <button className="btn btn-outline-primary mt-4"><FontAwesomeIcon icon={faDollyFlatbed}/> Checkout</button>
    </div>
    
  );
};

export default Cart;
