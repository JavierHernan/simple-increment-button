import React, {useState} from 'react';
import './App.css';
import Button from './Button.js';


function App() {
  const [change, setChange] = useState(0); 
  
  return(
    <div className="content">
      <h1 className="counter">{change}</h1>
      <Button 
        change={change}
        setChange={setChange}
      />
    </div>
    
  )
}

export default App;
