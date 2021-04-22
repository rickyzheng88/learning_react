import React, { useState, useEffect, useMemo } from 'react'

export default function EffectExample({ children }) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const keydowns = useMemo(() =>  children.split(""), [children]);

    const setPosition = ({ x, y }) => {
        setX(x);
        setY(y); 
    }

    useEffect(() => {
        window.addEventListener("mousemove", setPosition);
        return () => {
            window.removeEventListener("mousemove", setPosition);
        }
    }, []);

    useEffect(() => {
        console.log(keydowns);
    }, [keydowns]);

    useEffect(() => {
        console.log(`X = ${x}`);
    }, [x]);

    useEffect(() => {
        console.log(`Y = ${y}`);
    }, [y])

    return (
        <div>
            {`Coordenada X: ${x} - Coordenada Y: ${y}`}
        </div>
    )
}
