import React from 'react'
import './InputField.scss'

export default function InputField({ name,  handle,value }) {
    return (
        <div className="input-container" >
            <label className="input_label" style={{display: (name === 'Day' || name === 'Month' || name === 'Year' || name === "addressline1" || name === 'addressline2' || name === 'addressline3') ? 'none' : 'block' }}>
                {name}
            </label>
            <input id={name} value={value} placeholder={name}  className="field" name={name} onChange={handle} type={name === 'EmailAddress' ? 'email' : name=== 'PhoneNumber' ? 'tel' : 'text' } />
        </div>
    )
}
