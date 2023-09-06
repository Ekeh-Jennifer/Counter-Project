import {useState} from "react" 
import {
  ChevronDown,
  ChevronsDown,
  ChevronUp,
  ChevronsUp,
  Hash,
  RotateCcw
} from 'react-feather'

import './App.css'

export default function App() {
  const [counter, setCounter ]= useState(0)
  const increment = () =>{
 setCounter(count=>count + 1)   
  }
  const decrement = () =>{
 setCounter(count=>count - 1)   
  }
  const reset = () =>{
 setCounter(0)  
    
  }
  const incrementBy10= () =>{
 setCounter(count=>count + 10)   
  }
  const decrementBy10 = () =>{
 setCounter(count=>count - 10)   
  }
  const random = () =>{
 setCounter(Math.floor(Math.random()*100) + 1 )   
  }
  return (
    <main>
    <div><h1>Current Value</h1>
      <h2>{counter}</h2>
      <div className="btn-container">
      <button onClick={increment}>
      <ChevronUp/>
      </button>
        <button onClick={incrementBy10}>
      <ChevronsUp/>
      </button>
        <button onClick={reset} >
      <RotateCcw/>
      </button>
        <button onClick={random}>
      <Hash/>
      </button>
        <button onClick={decrement}>
      <ChevronDown/>
      </button>
        <button onClick={decrementBy10}>
      <ChevronsDown/>
      </button>
      </div>
    </div>
    </main>
  )
}
