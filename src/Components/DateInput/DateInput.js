import React from 'react';
import './DateInput.css';

function DateInput({getDate,setDateString}) {
    return (
        <div className="date-input-field">
        <input type="text" onChange={getDate} placeholder="Enter the date like: 1 jan 2022 20:45:56 "/>
        <button  onClick={setDateString}>Submit</button>                
        </div>
    )
}

export default DateInput;