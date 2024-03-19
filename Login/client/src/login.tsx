import axios from 'axios'
import { useState } from 'react';
import {useNavigate} from "react-router-dom";

function Login() {
  const [accountstate, accountsetState] = useState("");
  const [passwordstate, passwordsetState] = useState("");
  const search = () =>{
    //server listens on http://127.0.0.1:5001
    axios.post('http://127.0.0.1:5001/search', {account:accountstate, 
                                                password: passwordstate,}
    ).then((response)=>{
      console.log(response); // Data exists if response is true, false otherwise 
      if(response.data) navigateToCode();
    }
  )};
  const navigate = useNavigate();
  const navigateToCode = () => {
    // 👇️ navigate to /contacts
    navigate('/code');
  };
  return (
    <>
      <div id = "login-rec">
        <div className='login-text'> Login</div>
        <div className='login-text'> Account</div>
        <input type="text" onChange={(event)=>{
          accountsetState(event.target.value);
        }}/>
        <div className='login-text'> Passwords</div>
        <input type="password" onChange={(event)=>{
          passwordsetState(event.target.value);
        }}/>
        <div className='login-text'>
          <button onClick={search}>Login</button>
        </div>
        <div className='login-text'>
          <a href='/register'>Register</a>
        </div>
      </div>
    </>
  )
}

export default Login
