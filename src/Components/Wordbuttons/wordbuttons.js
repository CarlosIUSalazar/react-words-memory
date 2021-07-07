import React, {useState} from 'react'
import Button from '../Button/button'
import './wordbuttons.css'

export default function Wordbuttons({ words40, handleOkButton }) {
  let [amountWordsPressed, setAmountWordsPressed] = useState(0)

  const handleNumberWordsPressed = () => {
    setAmountWordsPressed(amountWordsPressed = amountWordsPressed + 1)
  }

  const buttonsElements = words40.map(word => {
    return <Button key={word.id} word={word} handleNumberWordsPressed={handleNumberWordsPressed}/>
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
