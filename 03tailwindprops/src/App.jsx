import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'
function App() {
  const [count, setCount] = useState(0)

  // let myObj={
  //   name:"Anupam",
  //   age:23
  // }
  // let newArr=[1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black m-4 p-4 rounded-xl'>Hello world</h1>

      <Cards username="Vikash" btnText="Click me"/>   
      <br/>   
      <Cards username="Vikash" />       
    </>
  )
}

export default App
