import React from 'react';
import axios from 'axios';
import { serverUrl } from '../App';
import { useState } from 'react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleGoogleLogin = async () => {
    try {
      // Gets authentication url from backend server
      const {
        data: { url },
      } = await axios.get(`${serverUrl}/auth/url`);
      // Navigate to consent screen
      window.location.assign(url);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <div className='justify-content-center align-items-center position-absolute row rounded'style={{ backgroundColor: 'white' }}>
      <h3 className='text-dark mb-3'>Login</h3>
      <form >
        <div className="form-group ms-2 me-2 col-auto" >
          <label htmlFor="exampleInputEmail1" className='text-dark'>Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => setEmail(e.target.value)}></input>
        </div>
        <div className="form-group ms-2 me-2 col-auto">
          <label htmlFor="exampleInputPassword1" className='text-start text-dark'>Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
        </div>
        <button type="submit" className="btn btn-primary col-auto">Submit</button>
      </form>
      <div  className="justify-content-center align-items-center">
        <button className="btn btn-primary row text-start p-2 col-auto" onClick={handleGoogleLogin}>
          Login using Google
        </button>
      </div>
    </div>
    </>
  );
};
