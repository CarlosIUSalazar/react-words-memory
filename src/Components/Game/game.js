import React, { useState, useEffect, useRef } from 'react';
import WordDisplay from '../WordDisplay/worddisplay'
import Wordbuttons from '../Wordbuttons/wordbuttons';
import './game.css';
import { wordsList } from '../../wordsList'

export const WordContext = React.createContext()

export default function Game() {
  
  const [startButtonShow, setStartButtonShow] = useState(true)
  const [wordPadShow, setWordPadShow] = useState(false)
  const [showWordDisplay, setShowWordDisplay] = useState(false)
  let [score, setScore] = useState(0)
  let [totalPossibleScore, setTotalPossibleScore] = useState(0)
  let [rounds, setRounds] = useState(0)
  let words15Array = useRef([])
  let words25Array = []
  let words40Array = useRef([])
  let userAnswerArray = []

  useEffect(() => {
    generate15And25And40RandomWords()
  },[])

  
  const handleUserWordsInput = (word) => {
    if (userAnswerArray.includes(word)) {
      const index = userAnswerArray.indexOf(word);
      if (index > -1) {
        userAnswerArray.splice(index, 1);
      }
    } else {
      userAnswerArray.push(word)
    }
    console.log("userAnswerArray",userAnswerArray)
  }

  
  const handleOkButton = () => {
    //Calculate correct words in user answer array. 
    const correctAnswers = words15Array.current.filter(e => userAnswerArray.indexOf(e) !== -1);
    console.log("correctAnswers",correctAnswers)
    //Update score
    setScore(score = score + correctAnswers.length)
    setTotalPossibleScore(totalPossibleScore = totalPossibleScore + 15)
    //Empezar de nuevo.  Desaparecer WordPad, Ok Button, Recalculate Arrays
    setShowWordDisplay(false)
    setWordPadShow(false)
    setStartButtonShow(true)
  }
  

  const increaseRoundsCounter = () => {
    setRounds(rounds = rounds + 1)
  }
  

  const handleStartButton = () => {
    generate15And25And40RandomWords()
    console.log("15correctWords", words15Array.current)
    console.log("nonshuffled", words40Array.current)
    shuffleArray(words40Array.current)
    console.log("wordsShuffled40",words40Array.current)
    increaseRoundsCounter()
    setStartButtonShow(false)
    setShowWordDisplay(true)
  }
  

  const hideWordDisplayAndShowWordButtons = () => {
    setShowWordDisplay(false)
    setWordPadShow(true)
  }
  

  const generate15And25And40RandomWords = () => {
    //This function generates the 15 unrepeated correct words from master array
    //Then generates 25 unrepeated incorrect words from trimmed down copy of master array
    //Then generates 40 unrepeated array joining correct and incorrect words.
    words15Array.current = []
    words25Array = []
    words40Array.current = []
    const copyOfMasterArray = wordsList.slice()    
    
    //Generate 15 correct words from array of 2048
    for(let i= 0; i<15; i++){
      let arr = copyOfMasterArray[Math.floor(Math.random()*copyOfMasterArray.length)];
      let index = copyOfMasterArray.indexOf(arr); 
      copyOfMasterArray.splice(index, 1 );
      words15Array.current.push(arr)
    } 
    //console.log("copy of MAster", copyOfMasterArray)
    //console.log("words15Array",words15Array)
    
    //const copyOfMasterArray = wordsList.slice()   
    //Generate 25 Incorrect words from remaning array of 2033 words
    for(let i= 0; i<25; i++){
      let arr = copyOfMasterArray[Math.floor(Math.random()*copyOfMasterArray.length)];
      let index = copyOfMasterArray.indexOf(arr); 
      copyOfMasterArray.splice(index, 1 );
      words25Array.push(arr)
    } 
    
    words40Array.current = words15Array.current.concat(words25Array)
    //console.log("copy of Master", copyOfMasterArray)
    //console.log("words25Array",words25Array)
    console.log("words40Array", words40Array)
  }
  
  
  const shuffleArray = (array) => {
    //Durstenfeld shuffle technique to randomize the order of 40 word array
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }


  const restartGame = () => {
    window.location.reload();
  }
  
  
  const wordContextValue = {
    handleUserWordsInput
  }


  return (
    <>
      <WordContext.Provider value={wordContextValue}>
        <div className="score-info ">
        <div className="total-score ">Total Score: {score}/{totalPossibleScore}</div>
        <div className="restart-button">
          <button className="restart-button" onClick={restartGame}>???</button>  
        </div> 
        <div className="total-rounds">Total Rounds: {rounds}</div>
        </div>
        <div className="start-button-container">
          {startButtonShow && <button className="show-words-btn" onClick={()=> handleStartButton()}>Show Words</button>}
        </div>
        {showWordDisplay && <WordDisplay words15Array={words15Array.current} hideWordDisplayAndShowWordButtons={hideWordDisplayAndShowWordButtons}/>}
        {wordPadShow && <Wordbuttons words40={words40Array.current} handleOkButton={handleOkButton} userAnswerArray={userAnswerArray}/>}
      </WordContext.Provider>
    </>
  )
}
