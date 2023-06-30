import React from 'react';
import { Link } from 'react-router-dom';

function ProductListing() {
    const formStyles = {
        borderradius: '5px',
        backgroundcolor: 'white',
        padding: '50px 0 0 300px',
        width:'75%',
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
    <React.Fragment>
    <div className='container'>
      <div className='row'>
        <form action='' style={formStyles}>
        <div className='col-md-12'>
        <h2 className='mt-2'><ul>Products List</ul></h2>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Product 1</td>
              <td>500</td>
              <td>This is Product 1 with Price:500</td>
              <td>
              <Link to="/cart" style={buttonStyles} className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Add to cart</Link>
              </td>
            </tr>
            <br></br>
            <tr>
              <td>2</td>
              <td>Product 2</td>
              <td>700</td>
              <td>This is Product 1 with Price:700</td>
              <td>
              <Link to="/cart" style={buttonStyles} className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Add to cart</Link>
              </td>
            </tr>
            <br></br>
            <tr>
              <td>3</td>
              <td>Product 3</td>
              <td>800</td>
              <td>This is Product 3 with Price:800</td>
              <td>
              <Link to="/cart" style={buttonStyles} className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Add to cart</Link>
              </td>
            </tr>
            <br></br>
            <tr>
              <td>4</td>
              <td>Product 4</td>
              <td>600</td>
              <td>This is Product 4 with Price:1000</td>
              <td>
              <Link to="/cart" style={buttonStyles} className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Add to cart</Link>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
    </form>
    </div>
    </div>
    </React.Fragment>
  );
}

export default ProductListing;
