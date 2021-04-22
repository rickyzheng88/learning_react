import React from 'react'
import { FaStar } from 'react-icons/fa'

const createArray = (length) => [...Array(length)];

function Star({selected = false, onClick = f => f}) {
    return <FaStar color={selected ? 'red' : 'grey'} onClick={onClick}/>
}

export default function RatingStars({ totalStars = 5, selectedStars = 3, onRate = f => f}) {
    return (
        <>
            {createArray(totalStars).map((start, i) => 
                <Star selected={selectedStars > i} key={i} onClick={() => onRate(i + 1)}/>
            )}
            <p>
                Selected star {selectedStars} of total stars {totalStars}
            </p>
        </>
    );
}
