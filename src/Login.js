import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send login request to backend
    // Example using fetch API
    fetch('/api/mydb1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle login response
        console.log(data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };
  const formStyles = {
    borderradius: '5px',
    backgroundcolor: 'white',
    padding: '50px 0 0 300px',
    width:'75%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const inputStyles = {
    marginBottom: '10px',
    padding: '5px',
    width: '200px',
  };

  const buttonStyles = {
    backgroundColor: 'teal',
    color:'white',
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div className="body">
      <div className='bg-white p-3 roundedw-25'>
        <form action="" style={formStyles} onSubmit={handleSubmit}>
        <h2>Log In</h2>
            <div className="mb-3">
              <label htmlFor ="username" color='white' ><strong>Username</strong></label>
              <input
                type="text"
                placeholder="Enter Username"
                name="username"
                value={username}
                style={inputStyles}
                onChange={(e) => setUsername(e.target.value)}
                className='form-control rounded-0'/>
            </div>
            <div className="mb-3">
              <label htmlFor ="Password"><strong>Password</strong></label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                style={inputStyles}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='form-control rounded-0'/>
            </div>
            <div>
            <input type="checkbox" id="terms" name="terms" value="terms" checked/>
            <label for="terms"> <font color="black">You are agree to our terms and conditions </font> </label>
            </div>
            <Link to="/home" style={buttonStyles} className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</Link>
            <br></br>
            <Link to="/signup"style={buttonStyles} className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Create Account</Link>
         </form>
       </div>
     </div>
  );
}

export default Login;
