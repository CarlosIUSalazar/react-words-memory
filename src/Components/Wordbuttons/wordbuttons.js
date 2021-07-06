import React from 'react'
import Button from '../Button/button'
import './wordbuttons.css'

export default function Wordbuttons({ words40 }) {
  const buttonsElements = words40.map(word => {
    return <Button key={word.id} words={word} />
  })

    return (
      <>
        <div className="wordbuttons__buttons-pad">
          {buttonsElements}
        </div>
        <div className='wordbuttons__ok-button-container'>
          <button className='wordbuttons__ok-button'>Ok</button>
        </div>
      </>
    )

}
