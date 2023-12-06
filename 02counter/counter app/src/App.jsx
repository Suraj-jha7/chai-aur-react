import { useState } from 'react'
import './App.css'




function App() {
  let [counter, setCounter] = useState(0)

  function adder(){
    if(counter<20)
    counter=counter+1;
    setCounter(counter);
  }

  function remover(){
    if(counter!=0)
    counter=counter-1;
    setCounter(counter);
  }
  

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter{counter}</h2>
     <button onClick={adder}>Add counter </button>
     <button onClick={remover}>Decrease Counter </button>
     <footer>{counter}</footer>
    </>
  )
}

export default App
