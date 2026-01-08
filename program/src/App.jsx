
import { useState } from 'react'
import './App.css'

function App() {

const [count,setcount]=useState(0)
const increment = () => {
   setcount(count + 1)
};
const deccrement = () => {
 
    setcount(count - 1)
  
  
  
};
const reset = () => {
  setcount(count * 0)
  
};

return(
  <>
  <h1>{count}</h1>
  <button onClick={increment}>increment</button>
  <button onClick={deccrement}>decrement</button>
  <button onClick={reset}>reset</button>
  </>
)
}

export default App
