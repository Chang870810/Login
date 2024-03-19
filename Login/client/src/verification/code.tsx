import { useState } from 'react';
import {useNavigate} from "react-router-dom";

function Code() {
  const [codestate, codesetState] = useState("");
  const navigate = useNavigate();
  const navigateToHome = () => {
    // 👇️ navigate to /contacts
    navigate('/home');
  };
  return (
    <>
      <div id = "login-rec">
        <a href='/'>☚</a>
        <div className='login-text'> Code</div>
        <input type="text" onChange={(event)=>{
          codesetState(event.target.value);
        }}/>
        <div className='login-text'>
          <button onClick={navigateToHome}>Enter</button>
        </div>
      </div>
    </>
  )
}

export default Code
