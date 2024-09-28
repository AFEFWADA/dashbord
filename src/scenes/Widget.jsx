import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Wid() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/Widget', { email, password })
      .then(result => {
        console.log(result);
        navigate('/home'); // route
      })
      .catch(err => console.log(err));
  };

  return (
   
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#141b2d', 
        height: '100vh', 
        border: '1px solid'
      }}
    >
      {/* Header */}
      <div style={{ 
        width: '100%', 
        backgroundColor: '#141b2d', 
        color: 'white', 
        padding: '10px 0',
        textAlign: 'center'
      }}>
        <h1>Welcome </h1>
      </div>
      
      {/* Form */}
      <div className="bg-white p-3 rounded w-25 mt-3 bg-#1F2A40">
        <h2>Widget</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="text-color"><strong >Email</strong></label>
            <input 
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="text-color"><strong>Password</strong></label>
            <input 
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to="/reg" >Sign Up</Link>
          <button type="submit" className="btn btn-default border w-100 bg-light rounded-2 text-decoration-none mt-2">Login</button>

        </form>
      </div>
    </div>
  );
}

export default Wid;
