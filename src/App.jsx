import './App.css';
import SamosaImg from "./images/Punjabi-Samosa-4.jpg"; 
import { useState } from 'react';
const App = () => {

  const [count, setCount] = useState(0);

  const [multliplier, setMultliplier] = useState(1); 


  const updateCount = () => {
    setCount(count + multliplier); 
  }

  return (
    <div className="App">
      <header>
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img onClick={updateCount} src={SamosaImg}className='samosa' />
      </header>
    </div>
  )
}

export default App