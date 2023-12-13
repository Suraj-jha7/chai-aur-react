import { useEffect, useRef, useState } from 'react'
import './App.css'



function App() {
  
  const trf=useRef()
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [Password,setPassword]=useState("");

  const passwordGenerator=()=>{
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed)
    {
      str+="0123456789"
    }
    if(charAllowed)
    {
      str+="!@#$%^&*()"
    }
    let pass="";
    for(let i=0;i<length;i++)
    {
        pass+=str[Math.floor(Math.random()*str.length)]
    }
    setPassword(pass);
    console.log(pass);
}

  useEffect(passwordGenerator,[length,numberAllowed,charAllowed])


  function copyToClipboard(){
    window.navigator.clipboard.writeText(Password);
    trf.current.select();
  }

  return (
    <>
     
     <div id="div-container">
     <h1 className='text-4xl   heading'>Password Generator</h1>
      <input type="text" name="" id="" value={Password} readOnly  ref={trf}/>
      <button id="btn" style={{ background:"white"}} onClick={copyToClipboard}>Copy</button>
      <br />
      <input type="range" id="lengthchar" value={length} min={8} max={16} onChange={(e)=>{setLength(e.target.value)}}/>
      <label htmlFor="lengthchar" style={{color:"white"}}>Length({length})</label>
      <input type="checkbox" id="numberCheck" onChange={()=>{setNumberAllowed((prev)=>{return !prev})}}/>
      <label htmlFor="numberCheck" style={{color:"white"}}>Number</label>
      <input type="checkbox" id="charCheck" onChange={()=>{setCharAllowed((prev)=>{return !prev})}}/>
      <label htmlFor="charCheck" style={{color:"white"}}>Characters</label>

     </div>
    </>
  )
}

export default App
