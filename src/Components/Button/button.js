import React, { useState, useContext } from 'react'
import { WordContext } from '../Game/game'
import './button.css'

export default function Button({word, handleNumberWordsPressed, userAnswerArray, hasChosen15Words, setHasChosen15Words}) {
  const {handleUserWordsInput} = useContext(WordContext)
  const [isPressed, setIsPressed] = useState(false)

  const handleChosen15WordsCase = () => {
    userAnswerArray.length >= 15 ? setHasChosen15Words(true) : setHasChosen15Words(false);
  }

  const handleWordClick = (word) => {
    handleUserWordsInput(word)
    isPressed ? setIsPressed(false) : setIsPressed(true)
    console.log("the word is", word)
    handleNumberWordsPressed()
    handleChosen15WordsCase()
  }
  // console.log("chosen array length", userAnswerArray.length)
  // console.log("buttonstyle",buttonStyle)
  
  //Buttons will only be pressable if word array is below 15. If at 15 then only already pressed buttons are pressable which reduces the length of the array to under 15 and lets all other buttons be pressable again.
  return (
    <>
      <button disabled={hasChosen15Words && !isPressed ? 1 : 0} style = { isPressed ? {background:'#FDA7AE', color:'white'} : {background:'rgba(255, 255, 255,0)', color:'#747374'}} className='button__word-button' onClick={() => {handleWordClick(word)}}>{word}</button>
    </>    
  )
}
