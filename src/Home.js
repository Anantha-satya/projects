import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
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
       <h1><font color="black"> Welcome to Home page. </font> </h1>
       <Link to="/productlisting" style={buttonStyles} className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Products List</Link>
    </form>
  );
}

export default Home;
