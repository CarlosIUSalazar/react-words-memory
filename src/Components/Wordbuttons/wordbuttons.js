import React, {useState} from 'react'
import Button from '../Button/button'
import './wordbuttons.css'

export default function Wordbuttons({ words40, handleOkButton, userAnswerArray }) {
  let [amountWordsPressed, setAmountWordsPressed] = useState(0)
  const [hasChosen15Words, setHasChosen15Words] = useState(false)  //This state is above Button.js component. This is because when reaching 15 word array length, other buttons that are not re-rendered at that moment don't know about this so they remain clickable. By setting the state one level above all buttons they all get re-rendered with the latest length of the word array on every click of button. In essence a button click rerenders all buttons again, instead that single button only.

  const handleNumberWordsPressed = () => {
    setAmountWordsPressed(userAnswerArray.length)
  }

  const buttonsElements = words40.map(word => {
    return <Button key={word.id} word={word} handleNumberWordsPressed={handleNumberWordsPressed}userAnswerArray={userAnswerArray} hasChosen15Words={hasChosen15Words} setHasChosen15Words={setHasChosen15Words} />
  })

    return (
      <>
        <div className="wordbuttons__buttons-pad">
          {buttonsElements}
        </div>

        <div className="wordbuttons__selected-button-number-display">
          <h1>{amountWordsPressed}/15</h1>
        </div>

        <div className='wordbuttons__ok-button-container'>
          <button className='wordbuttons__ok-button' onClick={()=> {handleOkButton()}}>Ok</button>
        </div>
      </>
    )

}
