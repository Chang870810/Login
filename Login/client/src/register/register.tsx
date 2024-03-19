import './register.css'
import axios from 'axios'
import { useState } from 'react';


function Register() {
  const [emailstate, emailsetState] = useState("");
  const [passwordstate, passwordsetState] = useState("");
  const [passwordconfirmedstate, passwordconfirmedsetState] = useState("");

  const insert = () =>{
    //server listens on http://127.0.0.1:5001
    axios.post('http://127.0.0.1:5001/insert', {email:emailstate, 
                                                password: passwordstate,}
    ).then((response)=>{
      console.log(response);
      if(response.data){
        var warn_info = document.getElementById('login_warn_info'); 
        warn_info.innerHTML = "register success";
      } 
      else{
        var warn_info = document.getElementById('login_warn_info'); 
        warn_info.innerHTML = "register failed, email or password repeated";
      } 
    }
  )};
  return (
    <>
      <div id = "login-rec">
        <a href='/'>☚</a>
        <div className='login-text'> Email</div>
        <input type="text" onChange={(event)=>{
          emailsetState(event.target.value);
        }}/>
        <div className='login-text'> Password</div>
        <input type="password" onChange={(event)=>{
          passwordsetState(event.target.value);
        }}/>
        <div className='login-text'> Password confirmed</div>
        <input type="password" onChange={(event)=>{
          passwordconfirmedsetState(event.target.value);
        }}/>
        <div className='login-text'>
          <button onClick={insert}>Enter</button>
        </div>
        <div className='login-text' id = "login_warn_info"></div>
      </div>
    </>
  )
}

export default Register
