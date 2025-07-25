import { useState, useCallback, useEffect, useRef } from 'react' 
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef Hook
  const passwordRef = useRef(null)

  //useCallback hook
  const passwordGenerator = useCallback(() => {
    let pass = ""

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) {
      str = str + "0123456789"
    }
    if (charAllowed) {
      str =  str + "!@#$%^&*-_+=[]{}~`"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass = pass + str.charAt(char)
    }
    setPassword(pass)

  },[length, numAllowed, charAllowed, setPassword])
  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password)}, [password])

  //useEffect hook
  useEffect(() => { 
    passwordGenerator()},
    [numAllowed,length,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg bg-white'>
          <input 
              type="text"
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='Password'
              readOnly
              ref={passwordRef} />

              <button onClick={copyPasswordToClipboard} 
              className='bg-blue-500 outline-none hover: px-3 py-0.5 shrink-0 text-white rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg 
               transition duration-300 ease-in-out active:scale-95 '>Copy</button>
        </div>

          <div className='flex text-sm gap-x-4 m-3  text-orange-500'>

            <div className='flex items-center gap-x-1'>
              <input 
                  type="range"
                  min={6}
                  max={25}
                  value={length}
                  className='my-3 cursor-pointer' 
                  onChange={(e) => {setLength(e.target.value)}} />
                  <label>Length:{length}</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input 
                  type="checkbox"
                  defaultChecked={numAllowed}
                  id='numberInput'
                  onChange={() => {setNumAllowed((prev) => !prev);
                  }} />
                  <label>Number</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input 
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id="characterInput"
                  onChange={() => {setCharAllowed((prev) => !prev);
                  }} />
                  <label >Character</label>
            </div>

          </div>

      </div>
    </>
  )
}

export default App
