import React from 'react'
import './button.css'

export default function Button({words}) {
    console.log("words in button",words)
    return (
        
            <button className='button__word-button'>{words}</button>
        
    )
}
