import React from 'react'

export default function Select({options, onChange, value, stylesName, name}) {
    return (
        <select 
        onChange={onChange} 
        value={value} 
        className={`select_common ${stylesName ? stylesName : ''}`} 
        name={name}>
            {options.map((option) => {
                return (
                    <option>{option}</option>
                )
            })}
        </select>
    )
}
