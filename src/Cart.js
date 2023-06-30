import React from 'react';
import { Link } from 'react-router-dom';

function Cart() {
    const formStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      };
      const buttonStyles = {
        backgroundColor: 'teal',
        color: 'white',
        padding: '10px',
        border: 'none',
        cursor: 'pointer',
      };
  return ( 
  <form action=''style={formStyles}> 
       <h1><font color="black"> Item added to cart. </font> </h1>
       <Link to="/home" style={buttonStyles} className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Home</Link>
       <br></br>
       <Link to="/" style={buttonStyles} className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Logout</Link>
    </form>
  );
}

export default Cart;