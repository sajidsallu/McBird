import React from 'react'
import './Button.scss'

export default function Button({name,action}) {
  return (
    <button onClick={action} style={{background:name === "Next" ? '#ffc107' : name === 'Submit' ? 'green' : null }} className={`global-button ${(name === 'Submit') ? "submit" : null} `}>
        {name}
    </button>
  )
}
