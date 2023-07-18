
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [count,setCout]=useState(0);

 console.log(count); 
  return (
    <div>
        {/* Do not remove the main div */}
        <h2>Button clicked {count} times</h2>
        <button onClick={setCout(count+1)}>Click me</button>
    </div>
  )
}

export default App
