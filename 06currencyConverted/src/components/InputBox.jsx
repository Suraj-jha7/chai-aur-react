import React from 'react'

export default function InputBox() {
  return (
    <div id="innerContainer">
      <div id="top">
        <span>From</span>
        <span>Currency Type</span>
      </div>
      <div id="down">
        <input type="number"></input>
        <select name="" id="">
            <option>INR</option>
            <option>USD</option>
            <option>CAD</option>

        </select>
      </div>
      
    </div>
  )
}
