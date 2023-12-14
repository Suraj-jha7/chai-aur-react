import React from 'react'

export default function InputBox({name,amount,onamountChange,currency,oncurrencyChange,exchangeCurData}) {
  return (
    <div id="innerContainer">
      <div id="top">
        <span>{name}</span>
        <span>Currency Type</span>
      </div>
      <div id="down">
        <input type="number" value={amount} onChange={(e)=>onamountChange(e.target.value)} placeholder='0'></input>
        <select value={currency} onChange={(e)=>
        {oncurrencyChange(e.target.value)
        // console.log(e.target.value)
        }}  >
        
            {/* <option value={"inr"}>INR</option> */}
            {
              Object.keys(exchangeCurData).map((curName,index)=>
                
                <option value={curName} key={index}>{curName.toUpperCase()}</option>
              )
            }

        </select>
      </div>
      
    </div>
  )
}
