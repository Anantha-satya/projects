import React from 'react';
import { Link } from 'react-router-dom';

function Logout() {
    const formStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      };
      const buttonStyles = {
        backgroundColor: 'teal',
        color: 'white',
        margin:'30px',
        padding: '10px',
        border: 'none',
        cursor: 'pointer',
      };
  return ( 
  <form action=''style={formStyles}> 
       <Link to="/" style={buttonStyles} className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Logout</Link>
    </form>
  );
}

export default Logout;