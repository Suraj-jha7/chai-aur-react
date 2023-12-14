import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from './components/InputBox';

function App() {
  const [count, setCount] = useState(0)
  const ans=useCurrencyInfo("cad");

  return (
    <>
     <h1>Currency Converter</h1>
     <h4>{ans["inr"]}</h4>
     <InputBox/>
     <InputBox/>
    </>
  )
}
export default App
