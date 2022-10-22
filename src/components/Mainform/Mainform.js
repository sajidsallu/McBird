import React, { useState } from 'react'
import { formServices } from '../../utils/service'
import Button from '../Globals/Button/Button'
import Formheading from '../Globals/Formheading/Formheading'
import InputField from '../Globals/InputField/InputField'
import Layout from '../Globals/Layout/Layout'
import './Mainform.scss'

export default function Mainform() {
    const [value, setValue] = useState({
        FirstName: '',
        LastName: '',
        EmailAddress: '',
        PhoneNumber: '',
        Day: '',
        Month: '',
        Year: '',
    })
    const [errstatus, setErrstatus] = useState({
        FirstName: false,
        LastName: false,
        EmailAddress: false,
        PhoneNumber: false,
        Day: false,
        Month: false,
        Year: false,
    })

    const [err, setErr] = useState({
        FirstName: 'Please enter your first name',
        LastName: 'Please enter your last name',
        EmailAddress: 'Please enter your email address',
        PhoneNumber: 'Please enter your phone number',
        Day: 'Please enter your day of birth',
        Month: 'Please enter your month of birth',
        Year: 'Please enter your year of birth',
    })
    const [contact, setContact] = useState(false)

    const handleChange = (e) => {
        const values = e.target.value
        setValue({
            ...value,
            [e.target.name]: values
        })

        if (e.target.name === 'FirstName') {
            if (values.length < 3) {
                errstatus.FirstName = true
            } else {
                errstatus.FirstName = false
            }
        }
        if (e.target.name === 'LastName') {
            if (values.length < 3) {
                errstatus.LastName = true
            } else {
                errstatus.LastName = false
            }
        }
        if (e.target.name === 'EmailAddress') {
            if (values.length < 3) {
                errstatus.EmailAddress = true
            }
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values)) {
                errstatus.EmailAddress = true
            }
            else {
                errstatus.EmailAddress = false
            }

        }
        if (e.target.name === 'PhoneNumber') {
            if (values.length < 10) {
                errstatus.PhoneNumber = true
            }
            else if (!/^[0-9]{10}$/.test(values)) {
                errstatus.PhoneNumber = true
            }
            else {
                errstatus.PhoneNumber = false
            }

        }
        if (e.target.name === 'Day') {
            if (values.length < 1) {
                errstatus.Day = true
            } else {
                errstatus.Day = false
            }
        }
        if (e.target.name === 'Month') {
            if (values.length < 1) {
                errstatus.Month = true
            } else {
                errstatus.Month = false
            }
        }
        if (e.target.name === 'Year') {
            if (values.length < 1) {
                errstatus.Year = true
            } else {
                errstatus.Year = false
            }
        }


    }

    console.log(value)

    const handleSubmit = (data) => {
        if (data.FirstName && data.LastName && data.EmailAddress && data.PhoneNumber && data.Day && data.Month && data.Year) {
            formServices.postFormData(data)
        }
    }




    return (
        <Layout>
            {!contact ?
                <>
                    <Formheading head="Enter your personal Details" />
                    <InputField value={value.FirstName} handle={handleChange} name="FirstName" />
                    {errstatus.FirstName ? <p id="nameerr" className="err">{err.FirstName}</p> : null}
                    <InputField  value={value.LastName} handle={handleChange} name="LastName" />
                    {errstatus.LastName ? <p id="nameerr" className="err">{err.LastName}</p> : null}
                    <div className="birthday__container">
                        <span>Enter your Date of Birth</span>
                        <span className="birthday__zombie">Date of Birth</span>
                        <div className="birthday__inputs">
                            <InputField value={value.Day}  handle={handleChange} name="Day" />
                            <InputField value={value.Month}  handle={handleChange} name="Month" />
                            <InputField  value={value.Year} handle={handleChange} name="Year" />
                        </div>
                    </div>
                    <Button action={() => (value.FirstName && value.LastName && value.Day && value.Month && value.Year) && setContact(true)} name="Next" />
                </>
                : <>
                    <Formheading head="Enter your Contact Details" />
                    <InputField value={value.EmailAddress}  handle={handleChange} name="EmailAddress" />
                    {errstatus.EmailAddress ? <p id="nameerr" className="err">{err.EmailAddress}</p> : null}
                    <InputField value={value.PhoneNumber} handle={handleChange} name="PhoneNumber" />
                    {errstatus.PhoneNumber ? <p id="nameerr" className="err">{err.PhoneNumber}</p> : null}
                    <Button action={() => handleSubmit(value)} name="Submit" />
                </>

            }

        </Layout>
    )
}
