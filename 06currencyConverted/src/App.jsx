import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from './components/InputBox';

function App() {
  const [fromAmount,setfromAmount]=useState(0);
  const [toAmount,settoAmount]=useState(0);
  const [fromCurrency,setfromCurrency]=useState("usd");
  const [toCurrency,settoCurrency]=useState("inr");
  const [count, setCount] = useState(0);
  const ans=useCurrencyInfo(fromCurrency);
  useEffect(()=>{
     settoAmount(ans[toCurrency]*fromAmount)
},[fromAmount,toAmount,fromCurrency,toCurrency,ans])


    function handleSwap() {
      let temp=toAmount;
      settoAmount(fromAmount);
      setfromAmount(temp);

      let tempcurr=toCurrency;
      settoCurrency(fromCurrency);
      setfromCurrency(tempcurr);

    }


  return (
    <>
    <h1 className="bold " >Currency Converter</h1>
     <div id="container">
     <InputBox  name="From" amount={fromAmount} onamountChange={setfromAmount} currency={fromCurrency} oncurrencyChange={setfromCurrency} exchangeCurData={ans}/>
     <button id="swapBtn" onClick={handleSwap}>Swap</button>
     <InputBox name="To"  amount={toAmount} onamountChange={settoAmount} currency={toCurrency} oncurrencyChange={settoCurrency} exchangeCurData={ans}/>
     <button id="convertBtn">Convert USD TO INR</button>
     </div>
   </>
  )
}
export default App
