import React from 'react';
import RatingStars from './RatingStars';
import useColors from '../hooks/colorsHook';

export default function Color({ 
    id, 
    title, 
    color, 
    rating
}) {
    const { removeColor, rateColor } = useColors();

    return (
        <div>
            <h2>{title}</h2>
            <span onClick={() => removeColor(id)}>X</span>
            <div style={{width: '200px', height: '80px', backgroundColor: color}}></div>
            <RatingStars selectedStars={rating} onRate={rating => rateColor(id, rating)}/>
        </div>
    )
}
