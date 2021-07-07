import React, { useState, useContext } from 'react'
import { WordContext } from '../Game/game'
import './button.css'

export default function Button({word, handleNumberWordsPressed}) {
  const {handleUserWordsInput} = useContext(WordContext)

  const [isPressed,setIsPressed] = useState(false)

  const handleWordClick = (word) => {
    handleUserWordsInput(word)
    isPressed ? setIsPressed(false) : setIsPressed(true)
    console.log("the word is", word)
    handleNumberWordsPressed()
  }

  return (
        
    <button style = { isPressed ? {background:'#FDA7AE', color:'white'} : {background:'rgba(255, 255, 255,0)', color:'#747374'}} className='button__word-button' onClick={() => {handleWordClick(word)}}>{word}</button>
        
  )
}

//let topWordColor = { color: 'grey' };
//topWordColor = { color: `${randomizeColor(colors)}` };
//        <h1 style = { topWordColor } > { topWord.toUpperCase() } </h1> 


// let pressedStyle = {background:'#000000', color:'white'}
// let nonPressedStyle = {background:'rgba(255, 255, 255,0)', color:'#747374'}
// let buttonStyle = nonPressedStyle

// useEffect(() =>  {
//     if (isPressed) {
//       buttonStyle = pressedStyle
//     } else {
//       buttonStyle = nonPressedStyle
//       console.log("pressed")
//     }
// },[isPressed])

// const switchPressedStyle = () => {
//   if (isPressed) {
//     setIsPressed(false)
//   }  else {
//     setIsPressed(true)
//   }
// }