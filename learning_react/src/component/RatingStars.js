import React from 'react'
import Star from './Star';

const createArray = (length) => [...Array(length)];

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
