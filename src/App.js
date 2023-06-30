import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './Login'
import Signup from './Signup';
import Home from './Home';
import ProductListing from './ProductListing';
import Cart from './Cart';
import Logout from './Logout'

    function App() {
      return (
        <Router>
          <Routes>
             <Route path="/" element={<Login />} />
             <Route path="/signup" element={<Signup />} />
             <Route path="/home" element={<Home />} />
             <Route path="/productlisting" element={<ProductListing />} />
             <Route path="/cart" element={<Cart />} />
             <Route path="/logout" element={<Logout />} />
          </Routes>
        </Router>
    );
}

export default App;
