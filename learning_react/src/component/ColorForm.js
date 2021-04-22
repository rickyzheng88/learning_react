import React from 'react';
import { useInput } from '../hooks/hooks';
import useColors from '../hooks/colorsHook';

export default function ColorForm() {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");
    const { addColor } = useColors();

    const submit = (e) => {
        e.preventDefault();
        addColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    };

    return (
        <form onSubmit={submit}>
            <input 
                type="text" 
                name="title" 
                required 
                placeholder="color title..."
                {...titleProps}
            />
            <input 
                type="color"
                name="color"
                required     
                {...colorProps}           
            />
            <button>ADD</button>
        </form>
    )
}
