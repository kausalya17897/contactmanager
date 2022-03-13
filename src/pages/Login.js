import React from 'react';
import './Login.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const [message, setMessage] = useState("");
  return (
    <div className='Login'>
        <h3>Account Login</h3>
        <div>
            <div className='ema'>
            <label for="email" className="emailname">Email</label><br/>
            <input type="email"
             className="email"
              placeholder=""
              value={email}/>
              </div>
              <div className='pass'>
              <label for="password" className="passwordname">Password</label><br/>
              <input type="password"
             className="password"
              placeholder=""
              value={password}/>
              </div>
<button type="submit" className="loginbutton">Login</button>
          
        </div>
        </div>
  )
}
