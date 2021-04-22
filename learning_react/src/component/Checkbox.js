import React, { useReducer } from 'react'

export default function Checkbox() {
    const [check, toggle] = useReducer(check => !check, false);
    const [number, add30] = useReducer(number => number + 30, 0);

    return (
        <div>
            <input 
                type="checkbox"
                value={check}
                onChange={toggle}
            />
            { check ? 'Checked' : 'Not checked' }
            <button onClick={add30}>
                Add 30
            </button>
            {number}
        </div>
    )
}
