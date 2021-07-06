import React from 'react';
import Logo from '../../Images/logo.png';
import '../Header/header.css'

export default function Header() {
  return (
        
    <div>
      <div className="logo"><img src={ Logo }></img></div>
      <h1>Word Memory Test</h1>
    </div>
    )
}