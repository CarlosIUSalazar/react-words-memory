import React, { useState } from 'react'
import './button.css'

export default function Button({words}) {
  const [isPressed,setIsPressed] = useState(false)

  let pressedStyle = {background:"#FDA7AE", color:'white'}
  let nonPressedStyle = {background:"rgba(255, 255, 255,0)", color:'#747374'}
  let buttonStyle = nonPressedStyle
  
  const switchPressedStyle = () => {
    if (isPressed) {
      buttonStyle = pressedStyle
      setIsPressed(false)
    } else {
      buttonStyle = nonPressedStyle
      setIsPressed(true)
    }
  }

  //console.log("words in button",words)
  return (
        
    <button style = {buttonStyle} className='button__word-button' onClick={() => {switchPressedStyle()}    }>{words}</button>
        
  )
}

//let topWordColor = { color: 'grey' };
//topWordColor = { color: `${randomizeColor(colors)}` };
//        <h1 style = { topWordColor } > { topWord.toUpperCase() } </h1> 
