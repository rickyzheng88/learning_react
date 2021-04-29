import React, { useReducer } from 'react'

export default function Checkbox() {
    const [check, toggle] = useReducer(check => !check, false);
    const [number, add30] = useReducer(number => number + 30, 0);

    return (
        <div>
            <label htmlFor='checkbox'>
            { check ? 'Checked' : 'Not checked' }
            <input 
                id='checkbox'
                type="checkbox"
                value={check}
                onChange={toggle}
                data-testid='checkbox'
            />            
            <button onClick={add30}>
                Add 30
            </button>
            {number}
            </label>
        </div>
    )
}
