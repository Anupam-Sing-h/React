import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    counter = counter+1
    setCounter(counter)
    console.log("clicked", counter);
  }

  const reduceValue = () => {
    //counter = counter-1
    if (counter==0) {
      setCounter(counter)
      console.log("clicked", counter);
    } else {
      setCounter(counter-1)
      
    }console.log("clicked", counter);
  
  }

  return (
    <>
      <h1> Counter Machine</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={reduceValue}>Reduce Value</button>
    </>
  )
}

export default App
