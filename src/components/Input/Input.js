import React from 'react'

export default function Input({onChange, date, name, label}) {
    return (
        <>
        <label>{label}</label>
        <input type="date" onChange={onChange} value={date} name={name} className="my_nasa_input"/>
        </>
    )
}
