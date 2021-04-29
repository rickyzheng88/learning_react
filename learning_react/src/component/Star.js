import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function Star({selected = false, onClick = f => f}) {
    return (
        <>
            <h1>Great Title</h1>
            <FaStar color={selected ? 'red' : 'grey'} onClick={onClick}/>
        </>
        
    )
}