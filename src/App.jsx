import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [pwd,setPwd] = useState('');
  const[isPwd,seIsPwd] = useState(false);
  return (
     <>
         <h1>Show And Hide Password</h1>
      <div className="container">
         <div id='inputt'>
          <input name='pwd' placeholder='Enter the password' type={isPwd ? "text" : 'password'} value={pwd} onChange={(e)=>setPwd(e.target.value)}/>
          </div>
          <div id='btn'>
             <button onClick={()=>seIsPwd(prevState => !prevState)}>
               {isPwd ? "Hide Passowrd" : "show password"}
             </button>
          </div>
        
      </div>
     </>
  )
}

export default App