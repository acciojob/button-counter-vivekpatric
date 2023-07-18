
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [count,setCount]=useState(0);

 console.log(count); 
 const funn=()=>{
  setCount(count+1);
 }
  return (
    <div>
        
        <p>Button clicked {count} times</p>
        <button onClick={funn}>Click me</button>
    </div>
  )
}

export default App
