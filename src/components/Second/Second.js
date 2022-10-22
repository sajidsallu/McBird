import React, { useState } from 'react'
import { formServices } from '../../utils/service'
import Button from '../Globals/Button/Button'
import Formheading from '../Globals/Formheading/Formheading'
import InputField from '../Globals/InputField/InputField'
import Layout from '../Globals/Layout/Layout'
import './Second.scss'

export default function Second() {
    const [address,setAddress] = useState(false)
    const [value, setValue] = useState()
    const [value1,setValue1] = useState()
    const [value2,setValue2] = useState()
    const [data,setData] = useState()

    console.log(value)
    const handleChange = (e) => {
        const values = e.target.value
        setValue({
            ...value,
            [e.target.name]: values
        })
    }
    const handleChange1 = (e) => {
        const values = e.target.value
        setValue1({
            ...value1,
            [e.target.name]: values
        })
    }
    const handleChange2 = (e) => {
        const values = e.target.value
        setValue2({
            ...value2,
            [e.target.name]: values
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setData({
            ...value,
            ...value1,
            ...value2
        })
        formServices.postAddressData(data)
    }
console.log(data)
  return (
    <>
    <Layout>
        <Formheading head="Enter your Previous Address" />
        
        <span className="second__label">Preious address 1</span>
        <InputField handle={handleChange} name="addressline1"/>
        <InputField handle={handleChange} name="addressline2"/>
        <InputField handle={handleChange} name="addressline3"/>
        <span className="second__label">Preious address 2</span>
        <InputField handle={handleChange1} name="addressline1"/>
        <InputField handle={handleChange1} name="addressline2"/>
        <InputField handle={handleChange1} name="addressline3"/>
        {address ? <><span className="second__label">Preious address 3</span>
        <InputField handle={handleChange2} name="addressline1"/>
        <InputField handle={handleChange2} name="addressline2"/>
        <InputField handle={handleChange2} name="addressline3"/></> : null}
        <Button action={handleSubmit} name="Submit"/>
        <p className="line" onClick={()=>setAddress(true)}>Add another Address</p>
        <p className="line"onClick={()=>setAddress(false)} >remove Address</p>

    </Layout>
    </>
  )
}
