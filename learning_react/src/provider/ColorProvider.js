import React, { useState, createContext } from 'react'
import colorData from '../data/colors.json';

export const ColorContext = createContext();

export default function ColorProvider({ children }) {
    const [colors, setColors] = useState(colorData);
    
    const addColor = (title, color) => 
        setColors([...colors, 
            {
                id: Math.floor(Math.random() * 999999),
                rating: 0,
                title,
                color
            }
        ]);

    const removeColor = (id) => setColors(colors.filter(color => color.id !== id));

    const rateColor = (id, rating) => 
        setColors(
            colors.map(color => (color.id === id ? {...color, rating} : color))
        );

    return(
        <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
            {children}
        </ColorContext.Provider>
    );
}
